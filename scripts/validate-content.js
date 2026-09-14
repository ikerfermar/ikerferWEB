const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const structurePath = path.join(projectRoot, "data", "structure.json");
const structure = JSON.parse(fs.readFileSync(structurePath, "utf8"));
const errors = [];
const seenIds = new Set();
let documentCount = 0;

for (const family of structure.familias) {
  for (const cycle of family.ciclos) {
    for (const module of cycle.modulos) {
      const units = module.unidadesTrabajo || [];
      for (const unit of units) {
        const unitIdentity = `${cycle.id}/${module.id}/${unit.id}`;
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(unit.id)) {
          errors.push(`ID de UT no válido: ${unitIdentity}`);
        }

        for (const content of unit.contenidos || []) {
          documentCount += 1;
          const identity = `${cycle.id}/${module.id}/${content.id}`;
          if (seenIds.has(identity)) errors.push(`ID duplicado: ${identity}`);
          seenIds.add(identity);

          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(content.id)) {
            errors.push(`ID no válido: ${identity}`);
          }
          if (!new Set(["teoria", "practica"]).has(content.tipo)) {
            errors.push(`Tipo no válido en ${identity}: ${content.tipo}`);
            continue;
          }

          const markdownPath = path.join(projectRoot, "content", cycle.id, module.id, content.tipo, `${content.id}.md`);
          if (!fs.existsSync(markdownPath)) {
            errors.push(`Falta el archivo: ${path.relative(projectRoot, markdownPath)}`);
            continue;
          }
          if (!fs.readFileSync(markdownPath, "utf8").trimStart().startsWith("# ")) {
            errors.push(`El archivo no empieza por H1: ${path.relative(projectRoot, markdownPath)}`);
          }
        }
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Contenido válido: ${documentCount} documentos comprobados.`);
}
