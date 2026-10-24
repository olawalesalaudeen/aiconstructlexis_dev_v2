# Hospital readmission prediction
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Readmission prediction  

## State of the Field

**Space of definitions.** In the available paper, the task is described as predicting whether a patient will be readmitted to the hospital within a specific timeframe from historical electronic health records. The formulation is explicitly binary, written as predicting whether the patient will be readmitted within σ days from prior records, with output y ∈ {0,1}.

**Variants.** The only explicit variation is the prediction horizon, expressed as readmission within σ days. The task is studied in two dataset settings, MIMIC-III and MIMIC-IV, and the paper does not name additional sub-tasks or modalities beyond that timeframe-based formulation.

**Space of elicitation and scores.** Papers measure this behavior with 2 instruments, MIMIC-III and MIMIC-IV. Both are used as datasets for experiments on hospital readmission prediction.

**What it is taken as evidence of.** The papers summarized here do not link hospital readmission prediction to any construct, so they do not specify a broader construct that this behavior is taken to indicate.

## Sources

**[Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf) (as "Readmission prediction")**
> The task of predicting whether a patient will be readmitted to the hospital within a specific timeframe based on their historical electronic health records.

## Relationships

### Hospital readmission prediction →
- **MIMIC-III** (measurements) — *measured_by*
  > Extensive experiments demonstrate that KARE outperforms leading models by up to 10.8-15.0% on MIMIC-III and 12.6-12.7% on MIMIC-IV for mortality and readmission predictions. (Abstract)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **MIMIC-IV** (measurements) — *measured_by*
  > Extensive experiments demonstrate that KARE outperforms leading models by up to 10.8-15.0% on MIMIC-III and 12.6-12.7% on MIMIC-IV for mortality and readmission predictions. (Abstract)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
