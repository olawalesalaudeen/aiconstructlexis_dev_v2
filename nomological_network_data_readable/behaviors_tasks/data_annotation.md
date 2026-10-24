# Data annotation
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Annotation generation, Label generation, Preference annotation, Source category labeling, Toxicity annotation, Missing event annotation, Text annotation, Bias annotation, Pun annotation, Ingroup annotation, Outgroup annotation, Structured video annotation, Event argument annotation, Facet annotation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats data annotation as assigning labels or metadata to examples or text under a specified schema. Most definitions center on observable outputs such as category labels, preference labels, role labels, or extracted features, while smaller lines of work extend the behavior to producing rationales, pedagogical feedback, or textual explanations alongside labels. Success is usually framed as returning the requested schema-conforming annotation, though some papers specify the target narrowly, such as True, False, or Unknown labels derived from all reasoning extensions, GENDERED or NEUTRAL source labels, or labels for additional event mentions missing from a prompt.

**Variants.** Papers study the behavior in several settings. Preference annotation is the most recurrent variant, usually labeling response pairs as chosen or rejected, or otherwise indicating which response is better; one multimodal formulation broadens this to scalar scores, rankings, and explanations for images. Other formulations include toxicity or bias labeling, source-category labeling for gendered versus neutral inputs, event-related annotation that adds missing events or assigns argument spans and roles, and structured educational or review annotations such as rationales, discourse relations, pedagogical feedback, and target or aspect labels.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead operationalize the behavior through explicit annotation instructions or schemas, including high-level instructions with few-shot examples for preference judgments, fixed outputs such as GENDERED and NEUTRAL or True, False, and Unknown, multi-label toxicity taxonomies, and automatic annotators that assign target and aspect labels. Some papers also distinguish who performs the annotation, including teachers and students, ingroup or outgroup annotators, and LLM-based annotators.

**What it is taken as evidence of.** Rather than consistently treating it as evidence of a construct, papers make only one construct-level link. One paper claims a causal relationship from Data annotation to Causal reasoning, describing the use of LLM text annotations for understanding VAD causation on human-related anomalies; no other construct link appears in the papers summarized here.

## Sources

**[Position: LLMs Can be Good Tutors in English Education](https://aclanthology.org/2025.emnlp-main.885.pdf) (as "Annotation generation")**
> Producing structured labels, rationales, or pedagogical feedback for educational data, such as explanations for grammar errors or discourse relations.

**[Language Models as Continuous Self-Evolving Data Engineers](https://aclanthology.org/2025.emnlp-main.914.pdf)**
> The observable action of assigning labels or metadata, such as preference information, to data examples.

**[MultiLogicNMR(er): A Benchmark and Neural-Symbolic Framework for Non-monotonic Reasoning with Multiple Extensions](https://aclanthology.org/2025.emnlp-main.927.pdf) (as "Label generation")**
> Assigning final truth values (True, False, Unknown) to questions based on the set of computed extensions under a specified reasoning mode.

**[Improve LLM-as-a-Judge Ability as a General Ability](https://aclanthology.org/2025.emnlp-main.712.pdf) (as "Preference annotation")**
> The task of automatically labeling pairs of responses as 'chosen' or 'rejected' to create preference data for downstream model training.

**[Mind the Inclusivity Gap: Multilingual Gender-Neutral Translation Evaluation with mGeNTE](https://aclanthology.org/2025.emnlp-main.692.pdf) (as "Source category labeling")**
> Outputting a label that classifies the source sentence as either gendered or neutral.

**[Mapping Toxic Comments Across Demographics: A Dataset from German Public Broadcasting](https://aclanthology.org/2025.emnlp-main.948.pdf) (as "Toxicity annotation")**
> The observable task of assigning one or more predefined labels from a multi-class, multi-label schema to a given text to categorize its toxic content.

**[SNaRe: Domain-aware Data Generation for Low-Resource Event Detection](https://aclanthology.org/2025.emnlp-main.1039.pdf) (as "Missing event annotation")**
> Detecting and labeling additional event mentions in a generated sentence that were not part of the initial generation prompt.

**[Benchmarking Debiasing Methods for LLM-based Parameter Estimates](https://aclanthology.org/2025.emnlp-main.1000.pdf) (as "Text annotation")**
> The process of assigning a label or extracting a feature from a piece of text according to a specified schema.

**[HESEIA: A community-based dataset for evaluating social biases in large language models, co-designed in real school settings in Latin America](https://aclanthology.org/2025.emnlp-main.1275.pdf) (as "Bias annotation")**
> The process by which teachers and students identify and label social biases in sentences according to demographic axes such as gender, socioeconomic status, and nationality.

**[ModelCitizens: Representing Community Voices in Online Safety](https://aclanthology.org/2025.emnlp-main.1571.pdf) (as "Ingroup annotation")**
> Providing toxicity labels by individuals who self-identify with the identity group targeted in a post, reflecting community-specific norms.

**[ModelCitizens: Representing Community Voices in Online Safety](https://aclanthology.org/2025.emnlp-main.1571.pdf) (as "Outgroup annotation")**
> Providing toxicity labels by individuals who do not identify with the target group, often reflecting external perceptions of harm.

**[Towards Event Extraction with Massive Types: LLM-based Collaborative Annotation and Partitioning Extraction](https://aclanthology.org/2025.emnlp-main.1743.pdf) (as "Event argument annotation")**
> Identifying argument spans in text and assigning each span a role for a given event type.

**[Mind the Blind Spots: A Focus-Level Evaluation Framework for LLM Reviews](https://aclanthology.org/2025.emnlp-main.1805.pdf) (as "Facet annotation")**
> The observable process of assigning predefined category labels (e.g., Method, Validity) to review points to enable structured analysis of review focus.
