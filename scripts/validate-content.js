const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const structurePath = path.join(projectRoot, "data", "structure.json");
const structure = JSON.parse(fs.readFileSync(structurePath, "utf8"));
const errors = [];
const checkedDocuments = new Set();
const modulesByPath = new Map();
const validId = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const validTypes = new Set(["teoria", "practica"]);

for (const family of structure.familias || []) {
  for (const cycle of family.ciclos || []) {
    for (const module of cycle.modulos || []) {
      if (!module.referencia) modulesByPath.set(`${cycle.id}/${module.id}`, module);
    }
  }
}

for (const family of structure.familias || []) {
  for (const cycle of family.ciclos || []) {
    for (const moduleEntry of cycle.modulos || []) {
      const reference = moduleEntry.referencia;
      const sourceCycleId = reference?.cicloId || cycle.id;
      const sourceModuleId = reference?.moduloId || moduleEntry.id;
      const module = reference
        ? modulesByPath.get(`${sourceCycleId}/${sourceModuleId}`)
        : moduleEntry;

      if (!module) {
        errors.push(`Referencia de módulo no válida: ${sourceCycleId}/${sourceModuleId}`);
        continue;
      }

      const seenIds = new Set();
      for (const unit of module.unidadesTrabajo || []) {
        const unitIdentity = `${cycle.id}/${module.id}/${unit.id}`;
        if (!validId.test(unit.id)) errors.push(`ID de UT no válido: ${unitIdentity}`);

        for (const content of unit.contenidos || []) {
          const identity = `${cycle.id}/${module.id}/${content.id}`;
          if (seenIds.has(content.id)) errors.push(`ID duplicado dentro del módulo: ${identity}`);
          seenIds.add(content.id);

          if (!validId.test(content.id)) errors.push(`ID no válido: ${identity}`);
          if (!validTypes.has(content.tipo)) {
            errors.push(`Tipo no válido en ${identity}: ${content.tipo}`);
            continue;
          }

          const markdownFile = path.join(
            projectRoot,
            "content",
            sourceCycleId,
            sourceModuleId,
            content.tipo,
            `${content.id}.md`
          );
          const relativeFile = path.relative(projectRoot, markdownFile);
          if (!fs.existsSync(markdownFile)) {
            errors.push(`Falta el archivo: ${relativeFile}`);
            continue;
          }

          const markdown = fs.readFileSync(markdownFile, "utf8").trimStart();
          const h1 = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
          if (!h1) errors.push(`El archivo no empieza por H1: ${relativeFile}`);
          else if (h1 !== content.titulo) {
            errors.push(`Título distinto del H1 en ${identity}: "${content.titulo}" ≠ "${h1}"`);
          }
          checkedDocuments.add(relativeFile);
        }
      }

      const programmingFile = module.programacion?.archivo;
      if (programmingFile && !fs.existsSync(path.join(projectRoot, programmingFile))) {
        errors.push(`Falta la programación: ${programmingFile}`);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Contenido válido: ${checkedDocuments.size} documentos únicos comprobados.`);
}
