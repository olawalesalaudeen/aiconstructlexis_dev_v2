# Unit conversion
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is narrow: unit conversion is treated as transforming a clinical measurement from one unit to another within a calculation workflow, such as converting µmol/L to mg/dL. Papers also describe the behavior as testing accuracy in numerical standardization, and a worked example converts serum creatinine from 417 µmol/L to about 4.72 mg/dL.

**Variants.** Papers provide little subdivision beyond clinical measurement conversion itself. The clearest instantiated case is serum creatinine conversion, and one paper studies the behavior in a tool-mediated setting where parameter unit mismatches trigger nested tool calling so that additional tools can be selected and used to resolve the mismatch across a complex toolchain.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it directly through unit-conversion examples and score it in terms of accuracy in numerical standardization.

**What it is taken as evidence of.** No construct is linked to it as evidence of.

## Sources

**[CMedCalc-Bench: A Fine-Grained Benchmark for Chinese Medical Calculations in LLM](https://aclanthology.org/2025.emnlp-main.1302.pdf)**
> Transforming a clinical measurement from one unit to another (e.g., µmol/L to mg/dL) as part of a calculation workflow.

## Relationships

### → Unit conversion
- **Tool use** (behaviors tasks) — *causes*
  > If MeNTi detects a mismatch in parameter units, it employs the nested tool calling mechanism to identify the need for additional tools. This mechanism enables iterative tool selection and utilization to resolve unit mismatches caused by complex toolchains requiring multiple tools. (Section 3.1)
  - [MeNTi: Bridging Medical Calculator and LLM Agent with Nested Tool Calling](https://aclanthology.org/2025.naacl-long.263.pdf)
