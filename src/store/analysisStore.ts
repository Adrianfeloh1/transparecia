import { atom } from 'nanostores';

export interface Finding {
  id: string;
  type: 'critical' | 'observation' | 'success';
  tag: string;
  title: string;
  description: string;
  badges: string[];
  originalText: string;
  suggestedText: string;
  isResolved: boolean;
}

export const $findings = atom<Finding[]>([
  {
    id: 'f1',
    type: 'critical',
    tag: 'Cláusula 3',
    title: 'Riesgo Crítico: Valor inusualmente alto',
    description: 'El monto establecido de $1,500,000,000 supera en un 40% el promedio histórico para este tipo de contrataciones en la entidad.',
    badges: ['Sobrecosto', 'Prioridad Alta'],
    originalText: 'CLÁUSULA TERCERA - VALOR: El valor del presente contrato se fija en la suma de MIL QUINIENTOS MILLONES DE PESOS M/CTE ($1,500,000,000).',
    suggestedText: 'CLÁUSULA TERCERA - VALOR: El valor del presente contrato se fija en la suma de MIL SETENTA MILLONES DE PESOS M/CTE ($1,070,000,000), ajustado al promedio histórico sectorial.',
    isResolved: false
  },
  {
    id: 'f2',
    type: 'observation',
    tag: 'Cláusula 6',
    title: 'Observación: Anticipo del 50%',
    description: 'La ley 1474 de 2011 sugiere evitar anticipos superiores al 50%. Aunque legal, requiere justificación excepcional y estricto control fiduciario.',
    badges: [],
    originalText: 'CLÁUSULA SEXTA - ANTICIPO: Se establece un anticipo equivalente al cincuenta por ciento (50%) del valor total del contrato, el cual deberá ser amortizado en cada pago proporcionalmente.',
    suggestedText: 'CLÁUSULA SEXTA - ANTICIPO: Se establece un anticipo equivalente al treinta por ciento (30%) del valor total del contrato, amortizado en cada pago proporcionalmente.',
    isResolved: false
  },
  {
    id: 'f3',
    type: 'success',
    tag: 'Cláusula 10',
    title: 'Validación Exitosa',
    description: 'Las pólizas y garantías exigidas cumplen con los porcentajes y amparos normativos requeridos para la cuantía del contrato.',
    badges: [],
    originalText: 'CLÁUSULA DÉCIMA - POLIZAS Y GARANTÍAS: El contratista deberá constituir a favor de la entidad las garantías de cumplimiento, buen manejo del anticipo, calidad del servicio y pago de salarios y prestaciones sociales.',
    suggestedText: 'CLÁUSULA DÉCIMA - POLIZAS Y GARANTÍAS: El contratista deberá constituir a favor de la entidad las garantías de cumplimiento, buen manejo del anticipo, calidad del servicio y pago de salarios y prestaciones sociales.',
    isResolved: false
  }
]);

export function resolveFinding(id: string) {
  $findings.set($findings.get().map(f => f.id === id ? { ...f, isResolved: true } : f));
}

export function resetFindings() {
  $findings.set($findings.get().map(f => ({ ...f, isResolved: false })));
}
