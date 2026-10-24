# De-identification
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Text anonymization  

## State of the Field

**Space of definitions.** Across the papers, it is treated as a text modification task aimed at removing identifying information, though the scope differs. One framing describes it as automatically removing or replacing personally identifiable information in text, especially patient and sometimes provider information in healthcare, to protect privacy. Another framing treats it as text anonymization, where a model removes, obfuscates, or generalizes cues in a text that support inference of an author's personal attributes, and frames the goal as removing information that could lead to inference of pre-specified attributes while maintaining the text's utility.

**Variants.** Papers use two closely related names for the behavior, de-identification and text anonymization. The settings differ between clinical text, where automated algorithms remove patient and sometimes provider identifiers, and authored text, where the model adapts relevant parts of a passage to hide cues about personal attributes. One paper also studies paraphrasing as a related behavior, using a paraphrasing model to baseline the anonymizing effect of pure text paraphrasing.

**Space of elicitation and scores.** No measurement instrument is linked to it.

**What it is taken as evidence of.** Among the reported construct links, Privacy preservation is the sole construct linked to this behavior. The recorded relationship is causal in direction from De-identification to Privacy preservation, with one paper stating that the goal of text anonymization is to remove all information that could lead to the inference of pre-specified author attributes while maintaining the utility of the original text.

## Sources

**[Not What the Doctor Ordered: Surveying LLM-based De-identification and Quantifying Clinical Information Loss](https://aclanthology.org/2025.emnlp-main.1637.pdf)**
> The task of processing text to automatically remove or replace personally identifiable information (PII) to protect patient privacy.

**[Language Models are Advanced Anonymizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/f478b2e8ad9ff0756bf5b79fb31c330f-Paper-Conference.pdf) (as "Text anonymization")**
> The observable process of a model modifying a text to remove, obfuscate, or generalize information that could be used to infer an author's personal attributes.

## Relationships

### Associated with
- **Paraphrasing** (behaviors tasks)
  > Additionally, we make use of the state-of-the-Art 11B transformer-based paraphrasing model Dipper (Krishna et al., 2024) to baseline the anonymizing effect of pure text paraphrasing. (Sec. 5)
  - [Language Models are Advanced Anonymizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/f478b2e8ad9ff0756bf5b79fb31c330f-Paper-Conference.pdf)
- **Privacy preservation** (constructs)
  > “the goal of any text anonymization method is to remove all information that could lead to the inference of a set of pre-specified author attributes while maintaining the utility of the original text.”
  - [Language Models are Advanced Anonymizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/f478b2e8ad9ff0756bf5b79fb31c330f-Paper-Conference.pdf)
