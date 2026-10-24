# Attribution ability
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Attribution, Evidence attribution  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across definitions, the prevailing usage treats attribution ability as the capacity to connect model outputs to supporting source material in a way that is faithful and traceable. One paper describes it as supporting claims with "traceable, source-aligned evidence," so reasoning steps can be audited and verified (Tree-of-Quote Prompting Improves Factuality and Attribution in Multi-Hop and Medical Reasoning). Another paper uses the near-synonymous label "evidence attribution" for the latent ability to link statements in generated explanations to supporting passages so that citations reflect the source content and context (Evaluating Evidence Attribution in Generated Fact Checking Explanations).

**Space of facets.** Papers use two closely aligned labels, "attribution" and "evidence attribution." The main variation is scope: one framing talks broadly about attributing model claims and reasoning steps to source material, while another focuses more narrowly on generated explanations and citation faithfulness. Attribution is also contrasted with factuality, with one paper explicitly saying its attribution evaluation does not assess whether an explanation is factually correct and is orthogonal to factuality-focused work.

**Space of measurement.** No measurement instrument is linked to it. The only linked behavioral indicator is Hallucination, but it is linked through a causal claim rather than as a recorded measure, so the operational language that appears in papers is criteria-focused: whether claims are backed by "traceable, source-aligned evidence" and whether attribution in generated explanations is "faithful to the source evidence."

**Links.** More than one paper claims a causal relationship from attribution ability to trustworthiness, with one saying that accurate attributions may help improve usefulness, transparency, and trustworthiness and another saying explanations should follow attribution convention to be trustworthy. Single papers also claim causal relationships from attribution ability to hallucination, with the quoted effect described as preventing hallucination, and to interpretability and explainability, where attributed triplet indexes are used to enhance the interpretability of generated text. Factuality is treated differently: one paper reports attribution ability as related to factuality but separate from it, describing attribution evaluation as orthogonal to judging whether an explanation is factually correct.

## Sources

**[Tree-of-Quote Prompting Improves Factuality and Attribution in Multi-Hop and Medical Reasoning](https://aclanthology.org/2025.emnlp-main.285.pdf) (as "Attribution")**
> The ability of a model to support its claims with traceable, source-aligned evidence, enabling auditability and verification of reasoning steps.

**[Evaluating Evidence Attribution in Generated Fact Checking Explanations](https://aclanthology.org/2025.naacl-long.282.pdf) (as "Evidence attribution")**
> The latent ability of a model to correctly and faithfully link statements in its explanations to the supporting source evidence, ensuring that citations reflect actual content and context from the provided passages.

## Relationships

### Attribution ability →
- **Trustworthiness** (constructs) — *causes*
  > Improving the ability of LLMs to both generate relevant summaries and provide accurate attributions has the potential to help improve their usefulness, transparency, and trustworthiness. (Section 2.1)
  - [Unstructured Evidence Attribution for Long Context Query Focused Summarization](https://aclanthology.org/2025.emnlp-main.95.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > Attribution: attribute triplet indexes in the generated text using sequential numbers to enhance the interpretability of the generated text. (Section 1)
  - [Evaluating and Improving Graph to Text Generation with Large Language Models](https://aclanthology.org/2025.naacl-long.513.pdf)
