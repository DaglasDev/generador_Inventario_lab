'use client'
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useLabStore = create(devtools(persist((set) => ({
  labs: [
    { id: 1, nombre: "lab 1", materiales: [{ nombre: "cosa", esInsumo: false, cantidad: 1, unidad: "cc", observacion: "Por grupo" }, { nombre: "cosa", esInsumo: true, cantidad: 1, unidad: "cc", observacion: "Por grupo" } , { nombre: "cosa", esInsumo: false, cantidad: 1, unidad: "cc", observacion: "Por grupo" }] },
    { id: 2, nombre: "lab 2", materiales: [{ nombre: "otra cosa", esInsumo: true, cantidad: 2, unidad: "ml", observacion: "Por curso" }] },
    { id: 3, nombre: "lab 3", materiales: [{ nombre: "otra otra cosa", esInsumo: false, cantidad: 3, unidad: "ml", observacion: "Por grupo" }] }
  ],
  createLab: (nombre) => set((state) => ({ labs: [...state.labs, { id: state.labs.length + 1, nombre, materiales: [] }] })),
  deleteLab: (id) => set((state) => ({ labs: [...state.labs.filter(l => l.id !== id)] })),
  deleteAllLabs: () => set(() => ({ labs: [] })),
  addMaterials: (id, material) => set((state) => ({
    labs: state.labs.map((lab) =>
      lab.id === id
        ? { ...lab, materiales: [...lab.materiales, material] }
        : lab
    )
  })),
  deleteMaterial: (labId, materialName) => set((state) => ({
    labs: state.labs.map((lab) =>
      lab.id === labId
        ? {
          ...lab,
          materiales: lab.materiales.filter(material => material.nombre !== materialName)
        }
        : lab
    )
  }))
})), { name: 'position-storage' }))