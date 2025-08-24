import React, { useState } from "react";
import { Calendar, Upload, Send } from "lucide-react";
import {
  BrutalistTextInput,
  BrutalistNumberInput,
  BrutalistDateInput,
  BrutalistColorInput,
  BrutalistSelect,
  BrutalistTextarea,
  BrutalistCheckbox,
  BrutalistRadioGroup,
  BrutalistRange,
  BrutalistFileUpload
} from "@/components/BrutalistForms";

export const FormsExample2: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    birthDate: "",
    country: "",
    bio: "",
    newsletter: false,
    gender: "",
    experience: 50,
    skills: [] as string[],
    avatar: null as File | null,
    favoriteColor: "#ff00ff",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const handleSkillsChange = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, avatar: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("FORM SUBMITTED! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            BRUTAL FORM
          </h1>
          <p className="text-xl font-bold mt-2 uppercase">
            No compromises. Pure function.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div className="bg-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
              PERSONAL INFO
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Text Inputs */}
              <BrutalistTextInput
                label="FIRST NAME"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="ENTER NAME"
                required
              />

              <BrutalistTextInput
                label="LAST NAME"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="ENTER SURNAME"
                required
              />

              <BrutalistTextInput
                label="EMAIL ADDRESS"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="EMAIL@DOMAIN.COM"
                required
              />

              <BrutalistTextInput
                label="PASSWORD"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="ENTER PASSWORD"
                required
              />

              <BrutalistNumberInput
                label="AGE"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min={18}
                max={120}
                placeholder="25"
              />

              <BrutalistDateInput
                label="BIRTH DATE"
                type="date"
                icon={<Calendar size={20} />}
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
              />

              <BrutalistColorInput
                label="FAVORITE COLOR"
                type="color"
                name="favoriteColor"
                value={formData.favoriteColor}
                onChange={handleInputChange}
                showPreview={true}
              />
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-magenta-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
              PREFERENCES
            </h2>

            <div className="space-y-6">
              <BrutalistSelect
                label="COUNTRY"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="SELECT COUNTRY"
                options={[
                  { value: "us", label: "UNITED STATES" },
                  { value: "uk", label: "UNITED KINGDOM" },
                  { value: "ca", label: "CANADA" },
                  { value: "au", label: "AUSTRALIA" },
                  { value: "de", label: "GERMANY" },
                  { value: "fr", label: "FRANCE" },
                  { value: "jp", label: "JAPAN" },
                  { value: "other", label: "OTHER" }
                ]}
              />

              <BrutalistTextarea
                label="BIO / DESCRIPTION"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={4}
                placeholder="TELL US ABOUT YOURSELF..."
              />

              <BrutalistCheckbox
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                label="SUBSCRIBE TO NEWSLETTER"
              />

              <BrutalistRadioGroup
                label="GENDER"
                name="gender"
                value={formData.gender}
                onChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                direction="horizontal"
                options={[
                  { value: "male", label: "MALE" },
                  { value: "female", label: "FEMALE" },
                  { value: "other", label: "OTHER" },
                  { value: "prefer-not-to-say", label: "PREFER NOT TO SAY" }
                ]}
              />

              <BrutalistRange
                label="EXPERIENCE LEVEL"
                type="range"
                name="experience"
                min={0}
                max={100}
                value={formData.experience}
                onChange={handleInputChange}
                showValue={true}
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
              SKILLS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Python",
                "Design",
                "Marketing",
              ].map((skill) => (
                <BrutalistCheckbox
                  key={skill}
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillsChange(skill)}
                  label={skill}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>

          {/* File Upload Section */}
          <div className="bg-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
              FILE UPLOAD
            </h2>

            <BrutalistFileUpload
              label="PROFILE AVATAR"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              uploadText="CLICK TO UPLOAD IMAGE"
              icon={<Upload size={20} />}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-12 py-6 bg-magenta-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-black text-2xl uppercase hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <Send size={24} />
              SUBMIT FORM
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-16 bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-6">
          <p className="text-xl font-black uppercase text-center">
            FORM COMPLETE. BRUTALISM ACHIEVED.
          </p>
        </div>
      </div>
    </div>
  );
};
