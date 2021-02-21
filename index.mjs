import * as selfImportMod from './examples/self_import_example.js';
import * as classMod from './examples/class_example.js';
import * as namespaceMod from './examples/namespace_example.js';
import * as stndExportMod from './examples/standard_export_example.js';
import * as depInjectionMod from './examples/dep_injection_example.js';

const classModInst = new classMod.ModuleClass();

selfImportMod.someFn('self import');
classModInst.someFn('class');
namespaceMod.someFn('namespace');
stndExportMod.someFn('standard export');
depInjectionMod.someFn('dependency injection');
