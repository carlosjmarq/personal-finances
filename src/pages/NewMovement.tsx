import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Select } from "@/components/Forms/Select";
import { NumberInput } from "@/components/Forms/NumberInput";

// Datos de ejemplo para los selectores
const cuentasOptions = [
  { value: "cuenta1", label: "Cuenta Corriente" },
  { value: "cuenta2", label: "Cuenta de Ahorros" },
  { value: "cuenta3", label: "Tarjeta de Crédito" },
  { value: "cuenta4", label: "Efectivo" },
];

const tiposOptions = [
  { value: "ingreso", label: "Ingreso" },
  { value: "gasto", label: "Gasto" },
  { value: "transferencia", label: "Transferencia" },
];

const categoriasOptions = [
  { value: "alimentacion", label: "Alimentación" },
  { value: "transporte", label: "Transporte" },
  { value: "entretenimiento", label: "Entretenimiento" },
  { value: "salud", label: "Salud" },
  { value: "educacion", label: "Educación" },
  { value: "servicios", label: "Servicios" },
  { value: "otros", label: "Otros" },
];

// Esquema de validación
const validationSchema = Yup.object({
  cuentaDesde: Yup.string().required("La cuenta desde es requerida"),
  cuentaDestino: Yup.string().required("La cuenta destino es requerida"),
  tipo: Yup.string().required("El tipo es requerido"),
  categoria: Yup.string().required("La categoría es requerida"),
  monto: Yup.number()
    .positive("El monto debe ser positivo")
    .required("El monto es requerido"),
});

// Valores iniciales
const initialValues = {
  cuentaDesde: "",
  cuentaDestino: "",
  tipo: "",
  categoria: "",
  monto: "",
};

export const NewMovement: React.FC = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Datos del formulario:", values);
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Nuevo Movimiento</h1>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <Select
              name="cuentaDesde"
              label="Cuenta Desde"
              options={cuentasOptions}
              placeholder="Seleccionar cuenta origen"
            />
            
            <Select
              name="cuentaDestino"
              label="Cuenta Destino"
              options={cuentasOptions}
              placeholder="Seleccionar cuenta destino"
            />
            
            <Select
              name="tipo"
              label="Tipo"
              options={tiposOptions}
              placeholder="Seleccionar tipo de movimiento"
            />
            
            <Select
              name="categoria"
              label="Categoría"
              options={categoriasOptions}
              placeholder="Seleccionar categoría"
            />
            
            <NumberInput
              name="monto"
              label="Monto"
              placeholder="0.00"
              min={0}
              step={0.01}
            />
            
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Guardando..." : "Guardar Movimiento"}
              </button>
              
              <button
                type="button"
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={() => {
                  // Lógica para cancelar o limpiar el formulario
                  window.history.back();
                }}
              >
                Cancelar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};