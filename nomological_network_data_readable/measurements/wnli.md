# WNLI
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across the papers, the prevailing framing is of WNLI as a Winograd Natural Language Inference benchmark or dataset within natural language understanding evaluations. Most definitions tie it to pronoun reasoning, pronoun resolution, or pronoun ambiguity, while some also describe it as evaluating sentence-level understanding, coreference resolution, and logical inference in pronoun disambiguation. One usage specifies results on the validation set.

**What it is claimed to measure.** Papers link WNLI to one construct and two behavioral indicators. The named measurement claims are that papers use it to measure language understanding task performance and natural language inference, and one paper also uses it to measure generalization, describing WNLI as an additional out-of-domain task for assessing adaptability and generalization capabilities. These links stay limited to those three targets.

**Space of uses.** In use, papers relate WNLI to one other measurement instrument, GLUE, and usually place it inside broader evaluation suites rather than treating it in isolation. It appears alongside CoLA, MRPC, RTE, and SST-2 in NLU dataset lists, while other papers report zero-shot accuracy on WNLI or use its validation set to measure performance, including one study that uses validation-set performance to test debiasing effects of in-context learning on length bias. A smaller line of work uses WNLI as an additional out-of-domain check for adaptability and generalization.

## Sources

**[HeadMap: Locating and Enhancing Knowledge Circuits in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/52fc02778520b240c57046b3f7588ba1-Paper-Conference.pdf)**
> A natural language inference benchmark used to evaluate sentence-level understanding and pronoun reasoning.

## Relationships

### → WNLI
- **Natural language inference** (behaviors tasks) — *measured_by*
  > for inference tasks, the RTE and WNLI (both from GLUE) datasets (Section 4).
  - [PortLLM: Personalizing Evolving Large Language Models with Training-Free and Portable Model Patches](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c444334e6bcf4e796f59f6d0bcae2a-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > We then assessed the performance of the merged LoRA on these in-domain tasks as well as on two additional out-of-domain tasks, SNLI and WNLI, to evaluate its adaptability and generalization capabilities.
  - [Merging LoRAs like Playing LEGO: Pushing the Modularity of LoRA to Extremes Through Rank-Wise Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b54e0146a82945f01e69c2e3309ba925-Paper-Conference.pdf)

### Associated with
- **GLUE** (measurements)
  > for inference tasks, the RTE and WNLI (both from GLUE) datasets (Section 4).
  - [PortLLM: Personalizing Evolving Large Language Models with Training-Free and Portable Model Patches](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c444334e6bcf4e796f59f6d0bcae2a-Paper-Conference.pdf)
