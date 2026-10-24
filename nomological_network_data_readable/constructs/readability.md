# Readability
**Type:** Construct  
**Referenced in:** 23 papers  
**Also known as:** Human-readability, Cognitive effort during reading, Understandability, Human readability  

## State of the Field

**Definition agreement:** Consensus. Most papers define readability as how easy a human reader, often a general audience, can read, process, and understand a text or generated output, with differences mainly in measurement such as linguistic complexity, comprehension feedback, cognitive effort, or subtitle constraints. A few papers use the term for different ideas such as adversarial prompt human-likeness or code style consistency, but these are minority outliers rather than the dominant pattern.

**Space of definitions.** Across most papers, readability is treated as the ease with which a person can read and understand generated text. This framing appears in summaries, translation, simplification, medical-response evaluation, scientific journalism, and alignment work, often described with nearby terms such as clarity, accessibility, understandability, or being not too technical for lay readers. A smaller line of work uses the term for human-like adversarial prompts that stay coherent, natural, and hard to filter, while other papers attach it to different targets altogether: subtitle compliance with CPL/CPS constraints, code translation style consistency, or cognitive effort during reading inferred from eye movements. One task-specific definition also notes that better patent-claim revisions may become less readable because they are denser and more legally precise.

**Space of facets.** Papers rarely give a formal taxonomy, but they commonly place readability alongside other evaluation axes, including understandability, accessibility, simplicity, naturalness, conciseness, and overall quality. One paper treats it as part of User Alignment, and several papers use it as one dimension in broader multi-criteria judgments rather than as a standalone property. Terminology is uneven: readability and understandability are sometimes used almost interchangeably, whereas human readability in jailbreak work means natural, understandable prompts that bypass readability or perplexity filters, and another line recasts it as readers' cognitive effort during comprehension.

**Space of measurement.** Readability is linked to one measurement instrument and one behavioral indicator. The linked instrument is Human evaluation, and papers describe it as ratings or judgments of readability or nearby qualities such as naturalness, conciseness, understandability, and overall quality; the only linked behavioral indicator is Text simplification, though it is used as a causal factor rather than as a scoring device. Beyond that, papers also operationalize readability with automatic formulas and proxies such as Flesch Reading Ease and CPL/CPS subtitle constraints, plus other language-specific formulas, and one line infers it from eye movement patterns. These operationalizations usually match the dominant ease-of-understanding definition, but some shift toward task-specific proxies such as subtitle formatting, code style preservation, or human-likeness of adversarial prompts.

**Links.** One paper claims a causal relationship from Human preference alignment to Readability, stating that aligning with aggregated client preference can improve generated content's readability, and another claims a causal relationship from Text simplification to Readability through higher ratings for translations from simplified inputs. Readability is also related to Human preference alignment in a skill taxonomy that places it under User Alignment, and one paper relates Readability to Text generation quality through a quality bundle that includes Flesch reading ease alongside perplexity difference and semantic similarity. Papers do not report a correlational link.

## Sources

**[Lived Experience Not Found: LLMs Struggle to Align with Experts on Addressing Adverse Drug Reactions from Psychiatric Medication Use](https://aclanthology.org/2025.naacl-long.553.pdf)**
> The quality of generated text being easy to read and understand, as judged by human evaluators.

**[AdvPrompter: Fast Adaptive Adversarial Prompting for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/paulus25a/paulus25a.pdf) (as "Human-readability")**
> The quality of a generated text, such as an adversarial prompt, being semantically coherent and appearing as if written by a human, making it difficult to distinguish from benign inputs.

**[Genre Matters: How Text Types Interact with Decoding Strategies and Lexical Predictors in Shaping Reading Behavior](https://aclanthology.org/2025.emnlp-main.379.pdf) (as "Cognitive effort during reading")**
> The latent level of mental processing load a reader experiences while comprehending a text, inferred from eye movement patterns and modulated by text type, word-level features, and decoding strategies.

**[Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf) (as "Understandability")**
> The quality of a generated text being clear and easy to comprehend by a human reader.

**[Jailbreaking as a Reward Misspecification Problem](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf00c2fdf92882989b1fc0e3094a2abf-Paper-Conference.pdf) (as "Human readability")**
> The extent to which generated adversarial prompts remain understandable and natural enough to avoid detection by readability-based filters.

## Relationships

### Readability →
- **Human evaluation** (measurements) — *measured_by*
  > “To assess our proposed method, we employ both automatic metrics and human evaluation on measures including readability...”
  - [JRE-L: Journalist, Reader, and Editor LLMs in the Loop for Science Journalism for the General Audience](https://aclanthology.org/2025.naacl-long.335.pdf)

### → Readability
- **Human preference alignment** (constructs) — *causes*
  > By aligning the LLM with the aggregated client preference, we can improve the professionalism and readability of LLM’s generated content. (Section 1)
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)
- **Text simplification** (behaviors tasks) — *causes*
  > the human evaluation results confirm that translations from simplified inputs are rated as more fluent, understandable, and better at preserving the meaning of the reference translation. (Section 5.3)
  - [Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf)

### Associated with
- **Text generation quality** (constructs)
  > Text quality is measured by absolute perplexity difference (|∆PPL|), Flesch reading ease score (Flesch), and semantic similarity (Sim) between the attacked and original text. Lower detection accuracy (↓) indicates better evasion, while higher Flesch and Sim scores (↑) reflect better readability and semantic preservation.
  - [TempParaphraser: ``Heating Up'' Text to Evade AI-Text Detection through Paraphrasing](https://aclanthology.org/2025.emnlp-main.1607.pdf)
