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

export interface Contract {
  id: string;
  title: string;
  clauses: { id: string; text: string; highlight?: 'red' | 'orange' | 'green' }[];
}

// ─── CONTRACT 1: Prestación de Servicios (default) ─────────────────────────

const contract1: Contract = {
  id: 'c1',
  title: 'Contrato de Prestación de Servicios',
  clauses: [
    { id: 'intro', text: 'Entre los suscritos, por una parte, LA ENTIDAD, con NIT 800.123.456-7, representada legalmente por su Director General, quien en adelante se denominará EL CONTRATANTE, y por la otra parte, TECH SOLUTIONS S.A.S., con NIT 900.987.654-3, representada por su Gerente, quien en adelante se denominará EL CONTRATISTA.' },
    { id: 'f1', text: 'CLÁUSULA TERCERA - VALOR: El valor del presente contrato se fija en la suma de MIL QUINIENTOS MILLONES DE PESOS M/CTE ($1,500,000,000).', highlight: 'red' },
    { id: 'mid', text: 'CLÁUSULA CUARTA - PLAZO DE EJECUCIÓN: El plazo de ejecución será de doce (12) meses, contados a partir de la firma del acta de inicio, y estará condicionado a la disponibilidad presupuestal de la vigencia fiscal correspondiente.' },
    { id: 'f2', text: 'CLÁUSULA SEXTA - ANTICIPO: Se establece un anticipo equivalente al cincuenta por ciento (50%) del valor total del contrato, el cual deberá ser amortizado en cada pago proporcionalmente.', highlight: 'orange' },
    { id: 'obl', text: 'CLÁUSULA OCTAVA - OBLIGACIONES DEL CONTRATISTA: El contratista se compromete a mantener estricta confidencialidad sobre la información suministrada, entregar informes periódicos y garantizar la calidad técnica del servicio prestado bajo los más altos estándares de la industria.' },
    { id: 'ces', text: 'CLÁUSULA NOVENA - CESIÓN Y SUBCONTRATACIÓN: El contratista no podrá ceder ni subcontratar total o parcialmente las obligaciones derivadas del presente contrato sin la autorización previa, expresa y escrita de la entidad contratante.' },
    { id: 'f3', text: 'CLÁUSULA DÉCIMA - POLIZAS Y GARANTÍAS: El contratista deberá constituir a favor de la entidad las garantías de cumplimiento, buen manejo del anticipo, calidad del servicio y pago de salarios y prestaciones sociales.', highlight: 'green' },
  ]
};

const findings1: Finding[] = [
  {
    id: 'f1',
    type: 'critical',
    tag: 'Cláusula 3',
    title: 'Riesgo Crítico: Valor inusualmente alto',
    description: 'El monto de $1,500,000,000 supera en un 40% el promedio histórico para este tipo de contrataciones en la entidad.',
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
    description: 'La Ley 1474 de 2011 sugiere evitar anticipos superiores al 50%. Requiere justificación excepcional y control fiduciario estricto.',
    badges: [],
    originalText: 'CLÁUSULA SEXTA - ANTICIPO: Se establece un anticipo equivalente al cincuenta por ciento (50%) del valor total del contrato, el cual deberá ser amortizado en cada pago proporcionalmente.',
    suggestedText: 'CLÁUSULA SEXTA - ANTICIPO: Se establece un anticipo equivalente al treinta por ciento (30%) del valor total del contrato, amortizado en cada pago proporcionalmente.',
    isResolved: false
  },
  {
    id: 'f3',
    type: 'success',
    tag: 'Cláusula 10',
    title: 'Validación Exitosa: Garantías',
    description: 'Las pólizas y garantías exigidas cumplen con los porcentajes y amparos normativos requeridos para la cuantía del contrato.',
    badges: [],
    originalText: 'CLÁUSULA DÉCIMA - POLIZAS Y GARANTÍAS: El contratista deberá constituir a favor de la entidad las garantías de cumplimiento, buen manejo del anticipo, calidad del servicio y pago de salarios y prestaciones sociales.',
    suggestedText: 'CLÁUSULA DÉCIMA - POLIZAS Y GARANTÍAS: El contratista deberá constituir a favor de la entidad las garantías de cumplimiento, buen manejo del anticipo, calidad del servicio y pago de salarios y prestaciones sociales.',
    isResolved: false
  }
];

// ─── CONTRACT 2: Adquisición de Computadores ───────────────────────────────

const contract2: Contract = {
  id: 'c2',
  title: 'Contrato de Adquisición de Equipos de Cómputo',
  clauses: [
    { id: 'intro', text: 'Entre los suscritos, por una parte, LA SECRETARÍA DE EDUCACIÓN MUNICIPAL, con NIT 890.501.019-8, representada por el Secretario de Educación, quien en adelante se denominará LA ENTIDAD, y por la otra parte, SISTEMAS Y SOLUCIONES TECNOLÓGICAS LTDA., con NIT 901.234.567-1, representada por su Gerente General, quien en adelante se denominará EL PROVEEDOR.' },
    { id: 'obj', text: 'CLÁUSULA PRIMERA - OBJETO: LA ENTIDAD contrata con EL PROVEEDOR el suministro de doscientos (200) equipos de cómputo de escritorio con sus respectivos periféricos, licencias de software de productividad y servicio de garantía técnica por un periodo de tres (3) años, destinados a las instituciones educativas del municipio.' },
    { id: 'f1', text: 'CLÁUSULA SEGUNDA - ESPECIFICACIONES TÉCNICAS: Los equipos deberán contar con procesador de última generación, mínimo 8GB de RAM y 256GB SSD. Sin embargo, el pliego de condiciones original exigía 16GB de RAM y 512GB SSD. Esta modificación representa una reducción del 35% en las especificaciones mínimas acordadas.', highlight: 'red' },
    { id: 'mid', text: 'CLÁUSULA TERCERA - PLAZO DE ENTREGA: El proveedor se obliga a entregar la totalidad de los equipos dentro de los sesenta (60) días calendario siguientes a la firma del acta de inicio y el desembolso del anticipo pactado.' },
    { id: 'f2', text: 'CLÁUSULA CUARTA - VALOR: El valor total del contrato asciende a la suma de OCHOCIENTOS OCHENTA MILLONES DE PESOS M/CTE ($880,000,000), equivalente a $4,400,000 por unidad. El precio de mercado referenciado en el estudio previo era de $3,100,000 por unidad, lo que implica un sobreprecio del 42% por equipo.', highlight: 'red' },
    { id: 'f3', text: 'CLÁUSULA QUINTA - ANTICIPO: Se pactará un anticipo del cuarenta por ciento (40%) del valor del contrato, amortizable en cada entrega parcial. El manejo de los recursos del anticipo se realizará mediante cuenta bancaria de manejo separado.', highlight: 'orange' },
    { id: 'gar', text: 'CLÁUSULA SEXTA - GARANTÍAS: EL PROVEEDOR deberá constituir póliza de cumplimiento por el veinte por ciento (20%) del valor del contrato, póliza de buen manejo del anticipo por el cien por ciento (100%) del anticipo recibido, y garantía de calidad y funcionamiento de los equipos por el término de la garantía técnica.' },
    { id: 'f4', text: 'CLÁUSULA SÉPTIMA - SUPERVISIÓN: La supervisión del contrato será ejercida por el Coordinador de Infraestructura Tecnológica. No se establece interventoría externa ni mecanismos de verificación técnica independiente, a pesar de que la cuantía del contrato supera los 500 SMMLV, lo cual lo haría obligatorio según el Estatuto de Contratación.', highlight: 'orange' },
    { id: 'f5', text: 'CLÁUSULA OCTAVA - MULTAS Y SANCIONES: En caso de incumplimiento en los plazos de entrega, se aplicarán multas del uno por ciento (1%) del valor total del contrato por cada día de retraso, hasta un máximo del diez por ciento (10%) del valor total. Verificado y conforme a la normativa vigente.', highlight: 'green' },
  ]
};

const findings2: Finding[] = [
  {
    id: 'f1',
    type: 'critical',
    tag: 'Cláusula 2',
    title: 'Alerta Crítica: Reducción de especificaciones',
    description: 'Las especificaciones técnicas de los equipos fueron reducidas (8GB RAM y 256GB SSD) frente al pliego original que exigía 16GB y 512GB. Riesgo de adquisición de equipos insuficientes para las aulas.',
    badges: ['Incumplimiento', 'Prioridad Alta'],
    originalText: 'CLÁUSULA SEGUNDA - ESPECIFICACIONES TÉCNICAS: Los equipos deberán contar con procesador de última generación, mínimo 8GB de RAM y 256GB SSD. Sin embargo, el pliego de condiciones original exigía 16GB de RAM y 512GB SSD. Esta modificación representa una reducción del 35% en las especificaciones mínimas acordadas.',
    suggestedText: 'CLÁUSULA SEGUNDA - ESPECIFICACIONES TÉCNICAS: Los equipos deberán contar con procesador de última generación, mínimo 16GB de RAM y 512GB SSD, conforme a lo establecido en el pliego de condiciones aprobado. Las especificaciones no podrán ser modificadas unilateralmente.',
    isResolved: false
  },
  {
    id: 'f2',
    type: 'critical',
    tag: 'Cláusula 4',
    title: 'Alerta Crítica: Sobreprecio del 42%',
    description: 'El precio unitario pactado ($4,400,000/equipo) supera en un 42% el precio de mercado referenciado en el estudio previo ($3,100,000/equipo), generando un posible detrimento patrimonial de ~$260,000,000.',
    badges: ['Sobreprecio', 'Detrimento', 'Prioridad Alta'],
    originalText: 'CLÁUSULA CUARTA - VALOR: El valor total del contrato asciende a la suma de OCHOCIENTOS OCHENTA MILLONES DE PESOS M/CTE ($880,000,000), equivalente a $4,400,000 por unidad. El precio de mercado referenciado en el estudio previo era de $3,100,000 por unidad, lo que implica un sobreprecio del 42% por equipo.',
    suggestedText: 'CLÁUSULA CUARTA - VALOR: El valor total del contrato asciende a la suma de SEISCIENTOS VEINTE MILLONES DE PESOS M/CTE ($620,000,000), equivalente a $3,100,000 por unidad, ajustado al precio de mercado vigente verificado mediante estudio de sector.',
    isResolved: false
  },
  {
    id: 'f3',
    type: 'observation',
    tag: 'Cláusula 5',
    title: 'Observación: Anticipo del 40%',
    description: 'El anticipo pactado al 40% es elevado para un contrato de suministro. Se recomienda reducirlo al 20% o establecer entregas por lotes con pagos parciales para mitigar el riesgo de incumplimiento.',
    badges: ['Riesgo Financiero'],
    originalText: 'CLÁUSULA QUINTA - ANTICIPO: Se pactará un anticipo del cuarenta por ciento (40%) del valor del contrato, amortizable en cada entrega parcial. El manejo de los recursos del anticipo se realizará mediante cuenta bancaria de manejo separado.',
    suggestedText: 'CLÁUSULA QUINTA - ANTICIPO: Se pactará un anticipo del veinte por ciento (20%) del valor del contrato, amortizable en cada entrega parcial. El resto del valor se pagará contra entrega verificada y certificada por el supervisor.',
    isResolved: false
  },
  {
    id: 'f4',
    type: 'observation',
    tag: 'Cláusula 7',
    title: 'Observación: Falta de interventoría externa',
    description: 'La cuantía supera los 500 SMMLV, lo cual obliga a contratar interventoría externa según el Art. 83 de la Ley 1474 de 2011. La supervisión interna no es suficiente para este tipo y cuantía de contrato.',
    badges: ['Requisito Legal'],
    originalText: 'CLÁUSULA SÉPTIMA - SUPERVISIÓN: La supervisión del contrato será ejercida por el Coordinador de Infraestructura Tecnológica. No se establece interventoría externa ni mecanismos de verificación técnica independiente, a pesar de que la cuantía del contrato supera los 500 SMMLV, lo cual lo haría obligatorio según el Estatuto de Contratación.',
    suggestedText: 'CLÁUSULA SÉPTIMA - SUPERVISIÓN E INTERVENTORÍA: Dado que el valor del contrato supera los 500 SMMLV, se contratará interventoría técnica externa e independiente conforme al Art. 83 de la Ley 1474 de 2011. La interventoría verificará el cumplimiento de las especificaciones técnicas en cada entrega.',
    isResolved: false
  },
  {
    id: 'f5',
    type: 'success',
    tag: 'Cláusula 8',
    title: 'Validación Exitosa: Régimen de multas',
    description: 'El régimen de multas por incumplimiento (1% diario, hasta el 10% del valor total) es proporcional, disuasivo y se ajusta a los límites establecidos por la jurisprudencia del Consejo de Estado.',
    badges: [],
    originalText: 'CLÁUSULA OCTAVA - MULTAS Y SANCIONES: En caso de incumplimiento en los plazos de entrega, se aplicarán multas del uno por ciento (1%) del valor total del contrato por cada día de retraso, hasta un máximo del diez por ciento (10%) del valor total. Verificado y conforme a la normativa vigente.',
    suggestedText: 'CLÁUSULA OCTAVA - MULTAS Y SANCIONES: En caso de incumplimiento en los plazos de entrega, se aplicarán multas del uno por ciento (1%) del valor total del contrato por cada día de retraso, hasta un máximo del diez por ciento (10%) del valor total. Verificado y conforme a la normativa vigente.',
    isResolved: false
  }
];

// ─── Store Atoms ────────────────────────────────────────────────────────────

export const $findings = atom<Finding[]>(findings1);
export const $activeContract = atom<Contract>(contract1);

// ─── Actions ────────────────────────────────────────────────────────────────

export function resolveFinding(id: string) {
  $findings.set($findings.get().map(f => f.id === id ? { ...f, isResolved: true } : f));
}

export function resetFindings() {
  $findings.set($findings.get().map(f => ({ ...f, isResolved: false })));
}

export function loadComputersContract() {
  $activeContract.set(contract2);
  $findings.set(findings2.map(f => ({ ...f, isResolved: false })));
}

export function loadDefaultContract() {
  $activeContract.set(contract1);
  $findings.set(findings1.map(f => ({ ...f, isResolved: false })));
}

export const $isReviewMode = atom<boolean>(false);

export function setReviewMode(value: boolean) {
  $isReviewMode.set(value);
}



