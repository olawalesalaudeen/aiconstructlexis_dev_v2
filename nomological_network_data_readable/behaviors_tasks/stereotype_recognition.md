# Stereotype recognition
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** Stereotype identification, Stereotype detection  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is a recognition or detection task in which models identify whether text expresses a stereotype. Most definitions describe distinguishing stereotypical from anti-stereotypical statements, or classifying which sentence in a context is the stereotypical one; one paper makes the scoring explicit as assigning sentences to "stereotype," "anti-stereotype," or "unrelated" categories. Some papers operationalize the behavior with direct prompts such as "Does the following statement reflect a stereotype?", while a smaller line of work asks models not only to identify stereotypes in prompts but also to critically explain them.

**Variants.** Papers use several closely related names for this behavior, including stereotype recognition, stereotype identification, and stereotype detection. The studied variants include yes or no judgments about a single statement, three-way sentence classification, and choosing which of two or more sentences expresses a stereotype, sometimes given a context and sometimes in a multiple-choice format. The settings mentioned include multilingual prompting, a Polish stereotype-based prompt collection that asks for explanation, and an EspanStereo-derived detection format.

**Space of elicitation and scores.** Papers link this behavior to two measurement instruments, HESEIA and StereoSet. StereoSet is used for sentence-level stereotype judgments, including three-class categorization and a multiple-choice adaptation. HESEIA is also linked as a measure of recognition, with one experiment described as having language models rate whether the model recognized the sentence as expressing a stereotype.

**What it is taken as evidence of.** Among linked constructs, the only explicit construct this behavior is used to measure is fairness. One paper states that it performs a stereotype recognition task "to evaluate the alignment of fairness," and other construct links do not appear in the linked relationships.

## Sources

**[Token-Aware Editing of Internal Activations for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.480.pdf)**
> A task designed to assess fairness by requiring the model to distinguish between stereotypical and anti-stereotypical statements.

**[PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf) (as "Stereotype identification")**
> The observable ability to recognize and critically explain stereotypical content in input prompts.

**[Scalable and Culturally Specific Stereotype Dataset Construction via Human-LLM Collaboration](https://aclanthology.org/2025.emnlp-main.1221.pdf) (as "Stereotype detection")**
> The task of classifying or identifying which of two or more sentences expresses a stereotype, given a context.

## Relationships

### Stereotype recognition →
- **StereoSet** (measurements) — *measured_by*
  > Stereotype Recognition: Utilizing StereoSet [35] to recognize stereotypes in sentences classifying them into one of three classes: “stereotype”, “anti-stereotype”, or “unrelated” categories. (Section 4)
  - [EAI: Emotional Decision-Making of LLMs in Strategic Games and Ethical Dilemmas](https://proceedings.neurips.cc/paper_files/paper/2024/file/611e84703eac7cc03f78339df8aae2ed-Paper-Conference.pdf)

### Associated with
- **Fairness** (constructs)
  > To evaluate the alignment of fairness, we perform stereotype recognition task (Sun et al., 2024) (Section 4.1).
  - [Token-Aware Editing of Internal Activations for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.480.pdf)
