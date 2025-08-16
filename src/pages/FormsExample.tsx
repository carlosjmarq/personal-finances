import React from "react";
import { Formik, Form } from "formik";
import {
  TextInput,
  TextareaInput,
  RadioButtons,
  CheckboxInput,
  DateInput,
  ColorInput,
  NumberInput,
  Select
} from "@/components/Forms";

// Datos de ejemplo
const genderOptions = [
  { value: "male", label: "Masculino" },
  { value: "female", label: "Femenino" },
  { value: "other", label: "Otro" },
];

const countryOptions = [
  { value: "mx", label: "México" },
  { value: "us", label: "Estados Unidos" },
  { value: "ca", label: "Canadá" },
  { value: "es", label: "España" },
];

const initialValues = {
  // Text inputs
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  
  // Textarea
  description: "",
  
  // Radio buttons
  gender: "",
  
  // Checkbox
  acceptTerms: false,
  newsletter: false,
  
  // Date
  birthDate: "",
  
  // Color
  favoriteColor: "#3b82f6",
  
  // Number
  age: "",
  
  // Select
  country: "",
};

export const FormsExample: React.FC = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Datos del formulario:", values);
    alert("¡Formulario enviado! Revisa la consola para ver los datos.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Ejemplo de Formularios</h1>
      
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna Izquierda */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Información Personal</h2>
              
              <TextInput
                name="firstName"
                label="Nombre"
                placeholder="Ingresa tu nombre"
              />
              
              <TextInput
                name="lastName"
                label="Apellido"
                placeholder="Ingresa tu apellido"
              />
              
              <TextInput
                name="email"
                label="Correo Electrónico"
                type="email"
                placeholder="tu@ejemplo.com"
                autoComplete="email"
              />
              
              <TextInput
                name="password"
                label="Contraseña"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
              />
              
              <NumberInput
                name="age"
                label="Edad"
                placeholder="25"
                min={0}
                max={120}
                step={1}
              />
              
              <DateInput
                name="birthDate"
                label="Fecha de Nacimiento"
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Columna Derecha */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Preferencias</h2>
              
              <Select
                name="country"
                label="País"
                options={countryOptions}
                placeholder="Selecciona tu país"
              />
              
              <RadioButtons
                name="gender"
                label="Género"
                options={genderOptions}
                direction="horizontal"
              />
              
              <ColorInput
                name="favoriteColor"
                label="Color Favorito"
                showPreview={true}
              />
              
              <TextareaInput
                name="description"
                label="Descripción"
                placeholder="Cuéntanos algo sobre ti..."
                rows={4}
              />
              
              <CheckboxInput
                name="acceptTerms"
                label="Acepto los términos y condiciones"
                description="Debes aceptar los términos para continuar."
              />
              
              <CheckboxInput
                name="newsletter"
                label="Suscribirse al boletín"
                description="Recibe noticias y actualizaciones por correo."
              />
            </div>

            {/* Botones */}
            <div className="md:col-span-2 flex gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isSubmitting ? "Enviando..." : "Enviar Formulario"}
              </button>
              
              <button
                type="reset"
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium"
              >
                Limpiar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
