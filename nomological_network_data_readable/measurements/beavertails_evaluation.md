# BeaverTails-Evaluation
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Beaver-eval  

## State of the Field

**What it is.** Across the papers, the prevailing description is of an evaluation benchmark for LLM harmlessness on harmful instructions, with definitions emphasizing both content safety and refusal behavior. One paper also refers to its 700 test prompts that can potentially elicit harmful responses. A smaller line of work uses the name Beaver-eval for a public dataset of malicious instructions and describes it as one source used to construct SG-Bench.

**What it is claimed to measure.** Papers link it to two constructs and no behavioral indicators. The dominant use is to measure Harmlessness: papers say it is used to evaluate a model's harmlessness, and one paper uses its harmful-response prompts for that purpose. A smaller usage treats it as measuring Safety more broadly, with one paper listing it among benchmarks that address safety.

**Space of uses.** Most papers use it directly as an evaluation benchmark. One paper includes it in a broader safety benchmark suite alongside XSTest, while another treats Beaver-eval as source material for constructing SG-Bench. No measurement instruments are linked to it.

## Sources

**[SDD: Self-Degraded Defense against Malicious Fine-tuning](https://aclanthology.org/2025.acl-long.1412.pdf)**
> A benchmark for evaluating the harmlessness of LLM responses to harmful instructions, assessing both content safety and refusal behavior.

**[SG-Bench: Evaluating LLM Safety Generalization Across Diverse Tasks and Prompt Types](https://proceedings.neurips.cc/paper_files/paper/2024/file/de7b99107c53e60257c727dc73daf1d1-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Beaver-eval")**
> A public dataset of malicious instructions used as a source for constructing the SG-Bench benchmark.

## Relationships

### → BeaverTails-Evaluation
- **Harmlessness** (constructs) — *measured_by*
  > To further explore how increased honesty impacts harmlessness, we utilize the 700 test prompts from BeaverTails-Evaluation10 (Ji et al., 2023b) that can potentially elicit harmful responses... (Appendix D.8)
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Safety** (constructs) — *measured_by*
  > We evaluate our models using a comprehensive set of benchmarks that address various aspects, including... safety (BeaverTails-Evaluation Ji et al., 2023 and XSTest R¨ottger et al., 2024) (Section 5).
  - [Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ac/li25ac.pdf)
