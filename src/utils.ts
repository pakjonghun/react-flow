interface Type {
  name: string;
}

export function isTypeMatch(typeA: Type, typeB: Type) {
  if (typeB.name === "unknown") return true;
  if (typeA.name === typeB.name) return true;
}
