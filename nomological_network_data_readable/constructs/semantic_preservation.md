# Semantic preservation
**Type:** Construct  
**Referenced in:** 26 papers  
**Also known as:** Meaning preservation, Meaning accuracy, Semantic fidelity  

## State of the Field

**Definition agreement:** Consensus. Most papers define semantic preservation as the degree to which a modified, rewritten, simplified, or adversarial text keeps the original text's meaning, core content, or factual information after changes. A few papers shift the object to a selected subset or a model's general ability, but they still use the term for the same core idea of retaining original semantic content rather than for a different phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats semantic preservation, often also called meaning preservation or semantic fidelity, as retaining the original meaning, semantic content, or core information when a text is rewritten, stylized, simplified, paraphrased, revised, or perturbed. Papers repeatedly phrase this as preserving the original meaning, ensuring minimal impact on the original semantics, or rewriting without changing the semantics. A smaller line of work applies the same idea to other objects, such as whether a selected benchmark subset retains the semantic information of the full question set, and one definition adds logical consistency with an expected answer and fidelity to the task goal.

**Space of facets.** Across papers, nearby labels such as meaning preservation and semantic fidelity are used for the same broad notion of preserving original semantics under transformation. The label meaning accuracy shifts the reference point from a source text to an expected answer and logical consistency. Papers also place this construct alongside other evaluation dimensions, including fluency, simplicity, conciseness, layness, coherence, grammatical correctness, and contextual appropriateness, and some explicitly balance or contrast it with text simplification, including reports that it can lack correlation with simplicity.

**Space of measurement.** Operationally, papers link the construct to 3 measurement instruments and 1 behavioral indicator. The linked instruments are Human evaluation, LLM-as-a-judge, and ParaDetox, with Human evaluation the most frequently linked: judges rate meaning preservation directly, often on a Likert scale; LLM-as-a-judge scores simplified text on meaning preservation alongside fluency and simplicity; and ParaDetox uses a Semantic Similarity measure of how well generated text preserves the original input's meaning. The linked behavioral indicator is Paraphrasing, framed as rewriting the input without changing the semantics. Beyond these links, papers also assess the construct with semantic similarity between original and perturbed text, reading comprehension for simplification, and Wasserstein distance between a selected subset and the full benchmark, so the operationalizations largely follow the dominant meaning-retention framing but sometimes shift to dataset-level semantic coverage.

**Links.** Papers relate semantic preservation to 1 construct, Text generation quality. In that formulation, text quality is measured by absolute perplexity difference, Flesch reading ease, and semantic similarity between attacked and original text, with higher semantic similarity described as reflecting better readability and semantic preservation.

## Sources

**[DRESSing Up LLM: Efficient Stylized Question-Answering via Style Subspace Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/09425891e393e64b0535194a81ba15b7-Paper-Conference.pdf)**
> The degree to which a stylized response retains the meaning of the original response rather than drifting in content.

**[Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf) (as "Meaning preservation")**
> The degree to which a model retains the original semantic content of the source text when generating a simplified or paraphrased version.

**[ZERA: Zero-init Instruction Evolving Refinement Agent -- From Zero Instructions to Structured Prompts via Principle-based Optimization](https://aclanthology.org/2025.emnlp-main.1190.pdf) (as "Meaning accuracy")**
> The degree to which the model preserves the intended meaning and logical consistency with the expected output, ensuring fidelity to the task goal.

**[Your Language Model Can Secretly Write Like Humans: Contrastive Paraphrase Attacks on LLM-Generated Text Detectors](https://aclanthology.org/2025.emnlp-main.433.pdf) (as "Semantic fidelity")**
> The extent to which a paraphrased or rewritten text preserves the original meaning and core information of the source text.

## Relationships

### Semantic preservation →
- **Human evaluation** (measurements) — *measured_by*
  > Using a 1-5 Likert scale, the judges are asked to rate the model output based on five criteria: comprehensiveness, layness, meaning preservation, conciseness, and fluency. (Section 5.3.3).
  - [VTechAGP: An Academic-to-General-Audience Text Paraphrase Dataset and Benchmark Models](https://aclanthology.org/2025.naacl-long.311.pdf)
- **XCOMET** (measurements) — *measured_by*
  > Our meaning preservation metric evaluates how well the rewrite maintains the intended meaning of the translation as represented by the reference... We compute XCOMET scores between the rewrites and reference translations (XCOMET(s′, r)). (Section 3.2)
  - [Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf)
- **QuestEval** (measurements) — *measured_by*
  > “QuestEval measures the meaning preservation of a simplification by comparing answers to a list of questions on the simplification and its corresponding source document.”
  - [Adapting Sentence-level Automatic Metrics for Document-level Simplification Evaluation](https://aclanthology.org/2025.naacl-long.327.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > “We use Llama3-8B-Instruct ... to evaluate the generated simplified text along three dimensions: meaning preservation, fluency, and simplicity.”
  - [Adapting Sentence-level Automatic Metrics for Document-level Simplification Evaluation](https://aclanthology.org/2025.naacl-long.327.pdf)
- **BERTScore** (measurements) — *measured_by*
  > The semantic dimension evaluates the extent to which a generated claim preserves the intended meaning and technical context of the original. We adopt BERTScore (MBS), which measures semantic similarity using contextual embeddings, due to its robustness in capturing meaning beyond lexical overlap.
  - [PatentScore: Multi-dimensional Evaluation of LLM-Generated Patent Claims](https://aclanthology.org/2025.emnlp-main.1564.pdf)

### Associated with
- **Text generation quality** (constructs)
  > Text quality is measured by absolute perplexity difference (|∆PPL|), Flesch reading ease score (Flesch), and semantic similarity (Sim) between the attacked and original text. Lower detection accuracy (↓) indicates better evasion, while higher Flesch and Sim scores (↑) reflect better readability and semantic preservation.
  - [TempParaphraser: ``Heating Up'' Text to Evade AI-Text Detection through Paraphrasing](https://aclanthology.org/2025.emnlp-main.1607.pdf)
- **Paraphrasing** (behaviors tasks)
  > “We pre-train DiffuSeq using the paraphrase dataset, which enables it to rewrite the input without changing the semantics.”
  - [DiffusionAttacker: Diffusion-Driven Prompt Manipulation for LLM Jailbreak](https://aclanthology.org/2025.emnlp-main.1128.pdf)
