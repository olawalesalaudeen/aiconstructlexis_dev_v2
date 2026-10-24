# Ambiguity detection ability
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Ambiguity detection, Ambiguity identification, Ambiguity recognition, Ambiguity awareness  

## State of the Field

**Definition agreement:** Consensus. Most papers define this as a model's ability to recognize that a question, claim, instruction, or situation is ambiguous because it permits multiple reasonable interpretations. A few papers narrow the setting to visual or referential ambiguity or add an appropriate response like asking for clarification or acknowledging uncertainty, but these are variations in scope and behavior around the same core property.

**Space of definitions.** Across the surveyed work, the prevailing usage treats ambiguity detection ability as a latent recognition capacity: noticing when a question, claim, instruction, object, or situation admits multiple plausible interpretations rather than a single certain answer. Most definitions keep this core and vary mainly by setting, with narrower versions focusing on visual questions that require clarification before answering, referential ambiguity from multiple possible referents in an image, or summary claims with ambiguous wording or implications. A smaller extension adds the model's response to detected ambiguity, especially acknowledging uncertainty before replying.

**Space of facets.** Papers use nearby names, including ambiguity detection, ambiguity recognition, ambiguity identification, and ambiguity awareness, for closely aligned recognition-oriented constructs. The named variants are organized chiefly by task setting: visual question ambiguity, referential ambiguity in images, ambiguity in narrative summary claims, and ambiguity in statements or instructions with multiple valid interpretations. One paper also places ambiguity awareness under aleatoric uncertainty awareness as a sub-category.

**Space of measurement.** Operationalization centers on whether models flag ambiguous inputs instead of proceeding as if they were clear. It is linked to 1 measurement instrument, Ambrosia, a benchmark, and 1 behavioral indicator, Coreference resolution, though only the benchmark is a direct measured_by link; source snippets also describe mixed ambiguous and non-ambiguous benchmark tests, binary labels for whether a summary claim contains ambiguities, and response-based indicators such as asking for clarification or using explicit acknowledgments of ambiguity. These operationalizations largely match the prevailing recognition-based definition, though some extend the target behavior to clarification seeking or uncertainty acknowledgment.

**Links.** Among the recorded relationships, it is measured by Ambrosia. The other recorded links are related links: one paper relates aleatoric uncertainty awareness to this construct by treating ambiguity awareness as a sub-category under it, and another relates the construct to coreference resolution, reporting a "persistent tension" in which higher Correct-Unamb performance tends to coincide with lower Detect-Ambig performance, and vice versa.

## Sources

**[Teaching Vision-Language Models to Ask: Resolving Ambiguity in Visual Questions](https://aclanthology.org/2025.acl-long.182.pdf) (as "Ambiguity detection")**
> The latent ability of a model to recognize when a visual question is ambiguous and requires clarification before answering.

**[RAcQUEt: Unveiling the Dangers of Overlooked Referential Ambiguity in Visual LLMs](https://aclanthology.org/2025.emnlp-main.1206.pdf) (as "Ambiguity recognition")**
> The latent ability of a model to detect when a question is referentially ambiguous due to multiple possible referents in an image and to respond appropriately by acknowledging uncertainty.

**[Language Models Identify Ambiguities and Exploit Loopholes](https://aclanthology.org/2025.emnlp-main.1677.pdf) (as "Ambiguity identification")**
> The latent ability to recognize when a statement or instruction has multiple possible, valid interpretations.

**[CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf) (as "Ambiguity awareness")**
> The ability to recognize when a question, object, or situation admits multiple plausible interpretations and therefore cannot be answered with certainty.

## Relationships

### Ambiguity detection ability →
- **Ambrosia** (measurements) — *measured_by*
  > We introduce a new benchmark, (cid:129)(cid:141)(cid:130)(cid:146)(cid:143)(cid:147)(cid:137)(cid:129), which we hope will inform and inspire the development of text-to-SQL parsers capable of recognizing and interpreting ambiguous requests. (Abstract)
  - [AMBROSIA: A Benchmark for Parsing Ambiguous Questions into Database Queries](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4c942a8405cc910f0a833d28d2573cc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Coreference resolution** (behaviors tasks) — *correlates*
  > Across all prompts we observe a persistent tension: high performance in Correct-Unamb tends to be accompanied by lower performance in Detect-Ambig, and vice versa. (Section 6)
  - [Correct-Detect: Balancing Performance and Ambiguity Through the Lens of Coreference Resolution in LLMs](https://aclanthology.org/2025.emnlp-main.1527.pdf)

### Associated with
- **Aleatoric uncertainty awareness** (constructs)
  > “Similarly, we define 2 sub-categories under aleatoric uncertainty: • Ambiguity awareness involves recognizing situations, objects, or individuals that can be understood, interpreted, or perceived in more than one way.”
  - [CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf)
