import { useState, useEffect } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { ToastNotification, useToastNotifications, predefinedToasts } from "./components/ui/toast";

// ── Replicate steps ──
import { StepAgeGroup } from "./components/steps/StepAgeGroup";
import { StepTriedPilates } from "./components/steps/StepTriedPilates";
import { StepBodyFeel } from "./components/steps/StepBodyFeel";
import { StepNotAlone } from "./components/steps/StepNotAlone";
import { StepDreamBody } from "./components/steps/StepDreamBody";
import { StepBodyWorks } from "./components/steps/StepBodyWorks";
import { StepBestShape } from "./components/steps/StepBestShape";
import { StepWorkRoutine } from "./components/steps/StepWorkRoutine";
import { StepPilatesEnergy } from "./components/steps/StepPilatesEnergy";
import { StepDedicationTime } from "./components/steps/StepDedicationTime";
import { StepSquats } from "./components/steps/StepSquats";
import { StepEnergyLevels } from "./components/steps/StepEnergyLevels";
import { StepWaterIntake } from "./components/steps/StepWaterIntake";
import { StepFocusRegions } from "./components/steps/StepFocusRegions";
import { StepDinnerTime } from "./components/steps/StepDinnerTime";
import { StepBreakfastTime } from "./components/steps/StepBreakfastTime";
import { StepHeight } from "./components/steps/StepHeight";
import { StepAge } from "./components/steps/StepAge";
import { StepSocialProof } from "./components/steps/StepSocialProof";
import { StepWeightPrediction } from "./components/steps/StepWeightPrediction";

// ── Clone steps ──
import { StepSleep } from "./components/steps/StepSleep";
import { StepStats } from "./components/steps/StepStats";
import { StepTrick } from "./components/steps/StepTrick";
import { StepObstacles } from "./components/steps/StepObstacles";
import { StepLifeEvents } from "./components/steps/StepLifeEvents";
import { StepFlexibility } from "./components/steps/StepFlexibility";
import { StepDiet } from "./components/steps/StepDiet";
import { StepBodyType } from "./components/steps/StepBodyType";
import { StepExerciseFrequency } from "./components/steps/StepExerciseFrequency";
import { StepMainGoal } from "./components/steps/StepMainGoal";
import { StepTrainingDays } from "./components/steps/StepTrainingDays";
import { StepMotivation } from "./components/steps/StepMotivation";
import { StepImportantEvent } from "./components/steps/StepImportantEvent";
import { StepLunch } from "./components/steps/StepLunch";
import { StepWeight } from "./components/steps/StepWeight";
import { StepDreamWeight } from "./components/steps/StepDreamWeight";
import { StepEliminate } from "./components/steps/StepEliminate";
import { StepMagazine } from "./components/steps/StepMagazine";
import { StepName } from "./components/steps/StepName";
import { StepLoading } from "./components/steps/StepLoading";

// ── Shared steps (used at the end) ──
import { StepAnalyzing } from "./components/steps/StepAnalyzing";
import { StepResult } from "./components/steps/StepResult";

const TOTAL_STEPS = 42;

// Steps that have their own "Continuar" / action button
const HAS_OWN_BUTTON = new Set([
  4, 9, 17, 18, 19, 20, // Replicate info/input screens
  22, 23, // Stats, Trick (info screens)
  35, 36, // Weight, DreamWeight (slider + button)
  37, 38, 39, // Eliminate, Magazine, Name
  40, 41, 42, // Loading, Analyzing, Result
]);

// Steps that auto-advance on selection (single-select radio)
const AUTO_ADVANCE = new Set([
  1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, // Replicate auto
  21, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, // Clone auto-select
]);

export default function App() {
  const [step, setStep] = useState(1);
  const { toasts, addToast } = useToastNotifications();

  // ── Replicate answers ──
  const [ageGroup, setAgeGroup] = useState("");
  const [triedPilates, setTriedPilates] = useState("");
  const [bodyFeel, setBodyFeel] = useState("");
  const [dreamBody, setDreamBody] = useState("normal");
  const [bodyWorks, setBodyWorks] = useState("");
  const [bestShape, setBestShape] = useState("");
  const [workRoutine, setWorkRoutine] = useState("");
  const [dedicationTime, setDedicationTime] = useState("");
  const [squats, setSquats] = useState("");
  const [energyLevels, setEnergyLevels] = useState("");
  const [waterIntake, setWaterIntake] = useState("");
  const [focusRegions, setFocusRegions] = useState<string[]>([]);
  const [dinnerTime, setDinnerTime] = useState("");
  const [breakfastTime, setBreakfastTime] = useState("");
  const [heightUnit, setHeightUnit] = useState<"cm" | "pol">("cm");
  const [heightValue, setHeightValue] = useState(180);
  const [age, setAge] = useState("");

  // ── Clone answers ──
  const [sleep, setSleep] = useState("");
  const [obstacles, setObstacles] = useState<string[]>([]);
  const [lifeEvents, setLifeEvents] = useState("");
  const [flexibility, setFlexibility] = useState("");
  const [diet, setDiet] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [exerciseFrequency, setExerciseFrequency] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [trainingDays, setTrainingDays] = useState("");
  const [motivation, setMotivation] = useState("");
  const [importantEvent, setImportantEvent] = useState("");
  const [lunch, setLunch] = useState("");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lb">("kg");
  const [weightValue, setWeightValue] = useState(70);
  const [dreamWeightUnit, setDreamWeightUnit] = useState<"kg" | "lb">("kg");
  const [dreamWeightValue, setDreamWeightValue] = useState(60);
  const [userName, setUserName] = useState("");

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const canAdvance = (): boolean => {
    switch (step) {
      case 14: return focusRegions.length > 0;
      case 24: return obstacles.length > 0;
      default: return true;
    }
  };

  const handleToggleFocusRegion = (value: string) => {
    setFocusRegions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleToggleObstacle = (value: string) => {
    setObstacles((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const autoSelect = (setter: (v: string) => void) => (v: string) => {
    setter(v);
    setTimeout(goNext, 280);
  };

  // Efeito manada - disparar toasts em momentos estratégicos
  useEffect(() => {
    const toastSchedule = [
      { step: 2, delay: 3000 },   // Início do quiz
      { step: 4, delay: 2000 },   // Após info screen
      { step: 7, delay: 2500 },   // Meio do quiz primeira parte
      { step: 10, delay: 1800 },  // Durante perguntas importantes
      { step: 13, delay: 2200 },  // Perguntas de estilo de vida
      { step: 16, delay: 3000 },  // Dados pessoais
      { step: 19, delay: 1500 },  // Prova social
      { step: 22, delay: 2000 },  // Início segunda parte
      { step: 25, delay: 2800 },  // Meio do quiz segunda parte
      { step: 28, delay: 2000 },  // Perguntas de exercício
      { step: 31, delay: 2500 },  // Objetivos e motivação
      { step: 34, delay: 1800 },  // Hábitos alimentícios
      { step: 37, delay: 2200 },  // Perto do final
      { step: 40, delay: 1000 },  // Loading
      { step: 41, delay: 1500 },  // Analyzing
    ];

    const schedule = toastSchedule.find(s => s.step === step);
    
    if (schedule) {
      const timer = setTimeout(() => {
        const randomToast = predefinedToasts[Math.floor(Math.random() * predefinedToasts.length)];
        addToast(randomToast.name, randomToast.country);
      }, schedule.delay);

      return () => clearTimeout(timer);
    }
  }, [step, addToast]);

  // Toasts aleatórios mais frequentes durante todo o quiz
  useEffect(() => {
    if (step >= 2 && step <= 41) {
      // Toasts mais frequentes: a cada 5-15 segundos
      const randomDelay = Math.random() * 10000 + 5000; 
      const timer = setTimeout(() => {
        const randomToast = predefinedToasts[Math.floor(Math.random() * predefinedToasts.length)];
        addToast(randomToast.name, randomToast.country);
      }, randomDelay);

      return () => clearTimeout(timer);
    }
  }, [step, addToast]);

  const renderStep = () => {
    switch (step) {
      // ════════════════════════════════════════════════════
      // PARTE 1: REPLICATE STEPS (1-22)
      // ════════════════════════════════════════════════════
      case 1:
        return <StepAgeGroup selected={ageGroup} onSelect={autoSelect(setAgeGroup)} />;
      case 2:
        return <StepTriedPilates selected={triedPilates} onSelect={autoSelect(setTriedPilates)} />;
      case 3:
        return <StepBodyFeel selected={bodyFeel} onSelect={autoSelect(setBodyFeel)} />;
      case 4:
        return <StepNotAlone onNext={goNext} />;
      case 5:
        return <StepDreamBody selected={dreamBody} onSelect={autoSelect(setDreamBody)} />;
      case 6:
        return <StepBodyWorks selected={bodyWorks} onSelect={autoSelect(setBodyWorks)} />;
      case 7:
        return <StepBestShape selected={bestShape} onSelect={autoSelect(setBestShape)} />;
      case 8:
        return <StepWorkRoutine selected={workRoutine} onSelect={autoSelect(setWorkRoutine)} />;
      case 9:
        return <StepPilatesEnergy onNext={goNext} />;
      case 10:
        return <StepDedicationTime selected={dedicationTime} onSelect={autoSelect(setDedicationTime)} />;
      case 11:
        return <StepSquats selected={squats} onSelect={autoSelect(setSquats)} />;
      case 12:
        return <StepEnergyLevels selected={energyLevels} onSelect={autoSelect(setEnergyLevels)} />;
      case 13:
        return <StepWaterIntake selected={waterIntake} onSelect={autoSelect(setWaterIntake)} />;
      case 14:
        return <StepFocusRegions selected={focusRegions} onToggle={handleToggleFocusRegion} />;
      case 15:
        return <StepDinnerTime selected={dinnerTime} onSelect={autoSelect(setDinnerTime)} />;
      case 16:
        return <StepBreakfastTime selected={breakfastTime} onSelect={autoSelect(setBreakfastTime)} />;
      case 17:
        return (
          <StepHeight
            unit={heightUnit}
            onUnitChange={setHeightUnit}
            value={heightValue}
            onChange={setHeightValue}
            onNext={goNext}
          />
        );
      case 18:
        return <StepAge value={age} onChange={setAge} onNext={goNext} />;
      case 19:
        return <StepSocialProof onNext={goNext} />;
      case 20:
        return <StepWeightPrediction onNext={goNext} />;

      // ════════════════════════════════════════════════════
      // PARTE 2: CLONE STEPS (21-41)
      // ════════════════════════════════════════════════════
      case 21:
        return <StepSleep selected={sleep} onSelect={autoSelect(setSleep)} />;
      case 22:
        return <StepStats onNext={goNext} />;
      case 23:
        return <StepTrick onNext={goNext} />;
      case 24:
        return <StepObstacles selected={obstacles} onToggle={handleToggleObstacle} />;
      case 25:
        return <StepLifeEvents selected={lifeEvents} onSelect={autoSelect(setLifeEvents)} />;
      case 26:
        return <StepFlexibility selected={flexibility} onSelect={autoSelect(setFlexibility)} />;
      case 27:
        return <StepDiet selected={diet} onSelect={autoSelect(setDiet)} />;
      case 28:
        return <StepBodyType selected={bodyType} onSelect={autoSelect(setBodyType)} />;
      case 29:
        return <StepExerciseFrequency selected={exerciseFrequency} onSelect={autoSelect(setExerciseFrequency)} />;
      case 30:
        return <StepMainGoal selected={mainGoal} onSelect={autoSelect(setMainGoal)} />;
      case 31:
        return <StepTrainingDays selected={trainingDays} onSelect={autoSelect(setTrainingDays)} />;
      case 32:
        return <StepMotivation selected={motivation} onSelect={autoSelect(setMotivation)} />;
      case 33:
        return <StepImportantEvent selected={importantEvent} onSelect={autoSelect(setImportantEvent)} />;
      case 34:
        return <StepLunch selected={lunch} onSelect={autoSelect(setLunch)} />;
      case 35:
        return (
          <StepWeight
            unit={weightUnit}
            onUnitChange={setWeightUnit}
            value={weightValue}
            onChange={setWeightValue}
            onNext={goNext}
          />
        );
      case 36:
        return (
          <StepDreamWeight
            unit={dreamWeightUnit}
            onUnitChange={setDreamWeightUnit}
            value={dreamWeightValue}
            onChange={setDreamWeightValue}
            onNext={goNext}
          />
        );
      case 37:
        return <StepEliminate onNext={goNext} />;
      case 38:
        return <StepMagazine onNext={goNext} />;
      case 39:
        return <StepName value={userName} onChange={setUserName} onNext={goNext} />;

      // ════════════════════════════════════════════════════
      // PARTE 3: FINALIZACIÓN (40-42)
      // ════════════════════════════════════════════════════
      case 40:
        return <StepLoading onDone={goNext} />;
      case 41:
        return <StepAnalyzing onDone={goNext} />;
      case 42:
        return <StepResult onContinue={() => setStep(1)} userName={userName} />;

      default:
        return null;
    }
  };

  const isAutoAdvance = AUTO_ADVANCE.has(step);
  const hasOwnButton = HAS_OWN_BUTTON.has(step);

  // Shared "Continuar" button for multi-select steps (focusRegions step 14, obstacles step 24)
  const showSharedButton = !isAutoAdvance && !hasOwnButton && (step === 14 || step === 24);

  const showBackButton = step > 1 && step < 40;

  // Hide progress bar on loading/analyzing/result screens
  const showProgressBar = step <= 39;

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center"
      style={{ backgroundColor: "#f7f7fb" }}
    >
      <ToastNotification toasts={toasts} />
      
      {showProgressBar && (
        <div className="w-full max-w-lg px-6 pt-6 pb-2">
          <ProgressBar current={step} total={TOTAL_STEPS} />
        </div>
      )}

      {showBackButton && (
        <div className="w-full max-w-lg px-6 pt-2">
          <button
            onClick={goBack}
            className="text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
            style={{ fontSize: "0.85rem" }}
          >
            ← Volver
          </button>
        </div>
      )}

      <div className="flex-1 w-full max-w-lg flex flex-col items-center justify-center px-6 py-10">
        {renderStep()}

        {showSharedButton && (
          <div className="w-full max-w-sm mt-8">
            <button
              onClick={goNext}
              disabled={!canAdvance()}
              className="w-full py-4 rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "#c026d3", fontWeight: 600, fontSize: "0.95rem" }}
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
