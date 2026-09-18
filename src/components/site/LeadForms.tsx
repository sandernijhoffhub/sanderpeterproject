"use client";

import { CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { brochureTopics } from "@/data/site";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-semibold text-foreground">{children}</label>;
}

export function BrochureForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-border bg-card p-8 shadow-soft">
        <CheckCircle2 className="h-10 w-10 text-forest" aria-hidden="true" />
        <h3 className="mt-5 font-display text-4xl leading-none text-foreground">De brochure staat klaar.</h3>
        <p className="mt-4 leading-7 text-muted-foreground">
          Voor dit prototype tonen we alleen deze melding. Later kan hier automatisch een e-mail
          of downloadlink aan worden gekoppeld.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Nog een aanvraag testen
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 rounded-md border border-border bg-card p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-9">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-earth">Gratis inspiratiebrochure</p>
        <h3 className="mt-4 font-display text-5xl leading-none text-foreground">
          Download onze gratis inspiratiebrochure
        </h3>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Tsjechië & Slowakije: van droom naar werkelijkheid.
        </p>
        <div className="mt-7 grid gap-2 text-sm text-foreground sm:grid-cols-2">
          {brochureTopics.map((topic) => (
            <span key={topic} className="rounded-md bg-secondary px-3 py-2 text-secondary-foreground">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <FieldLabel>Naam</FieldLabel>
          <Input required placeholder="Jouw naam" className="h-12 bg-background" />
        </div>
        <div className="grid gap-2">
          <FieldLabel>E-mail</FieldLabel>
          <Input required type="email" placeholder="naam@voorbeeld.nl" className="h-12 bg-background" />
        </div>
        <div className="grid gap-2">
          <FieldLabel>Waar droom je van?</FieldLabel>
          <Textarea
            required
            placeholder="Bijvoorbeeld: een huis met uitzicht, een renovatieproject of een plek voor familie."
            className="min-h-32 bg-background"
          />
        </div>
        <Button type="submit" size="xl" className="justify-self-start">
          Stuur mij de brochure
        </Button>
      </form>
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-border bg-card p-8 shadow-soft">
        <CheckCircle2 className="h-10 w-10 text-forest" aria-hidden="true" />
        <h2 className="mt-5 font-display text-5xl leading-none text-foreground">Dank je wel.</h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Je droom is ontvangen in deze prototypeflow. In de echte website kan dit formulier aan
          e-mail of klantopvolging worden gekoppeld.
        </p>
        <Button type="button" variant="outline" className="mt-7" onClick={() => setSubmitted(false)}>
          Formulier opnieuw bekijken
        </Button>
      </div>
    );
  }

  return (
    <form className="grid gap-5 rounded-md border border-border bg-card p-6 shadow-soft lg:p-9" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <FieldLabel>Voornaam</FieldLabel>
          <Input required placeholder="Voornaam" className="h-12 bg-background" />
        </div>
        <div className="grid gap-2">
          <FieldLabel>Achternaam</FieldLabel>
          <Input required placeholder="Achternaam" className="h-12 bg-background" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <FieldLabel>E-mail</FieldLabel>
          <Input required type="email" placeholder="naam@voorbeeld.nl" className="h-12 bg-background" />
        </div>
        <div className="grid gap-2">
          <FieldLabel>Telefoon</FieldLabel>
          <Input type="tel" placeholder="+31" className="h-12 bg-background" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <FieldLabel>Waar ben je naar op zoek?</FieldLabel>
          <Select required value={projectType} onValueChange={setProjectType}>
            <SelectTrigger className="h-12 bg-background">
              <SelectValue placeholder="Maak een keuze" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bestaand-huis">Ik zoek een bestaand huis</SelectItem>
              <SelectItem value="grond">Ik wil grond kopen</SelectItem>
              <SelectItem value="project">Ik heb al een project</SelectItem>
              <SelectItem value="turnkey">Ik wil turnkey bouwen</SelectItem>
              <SelectItem value="onbekend">Ik weet het nog niet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <FieldLabel>Budget</FieldLabel>
          <Select required value={budget} onValueChange={setBudget}>
            <SelectTrigger className="h-12 bg-background">
              <SelectValue placeholder="Maak een keuze" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="onder-100">&lt; €100.000</SelectItem>
              <SelectItem value="100-150">€100.000–€150.000</SelectItem>
              <SelectItem value="150-250">€150.000–€250.000</SelectItem>
              <SelectItem value="250-plus">€250.000+</SelectItem>
              <SelectItem value="onbekend">Nog onbekend</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2">
        <FieldLabel>Bericht</FieldLabel>
        <Textarea
          required
          placeholder="Vertel kort waar je aan denkt. Concreet of nog vaag is allebei goed."
          className="min-h-40 bg-background"
        />
      </div>
      <Button type="submit" size="xl" className="justify-self-start">
        Vertel ons over jouw droom
      </Button>
    </form>
  );
}
