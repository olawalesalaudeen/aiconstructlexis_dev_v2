# Parametric knowledge
**Type:** Construct  
**Referenced in:** 23 papers  
**Also known as:** Multi-task knowledge, Model knowledge, Internal knowledge, Implicit knowledge, Latent knowledge, Parametric memory, Prior knowledge, Task knowledge  

## State of the Field

**Definition agreement:** Consensus. Most papers define parametric knowledge as knowledge implicitly encoded in a model's parameters, usually acquired during pretraining and used without relying on external sources or prompt context. A few papers narrow this to factual, domain-specific, or task-specific knowledge, or mention related rules, capabilities, or extractability, but these are scope and emphasis differences around the same core phenomenon.

**Space of definitions.** Most papers describe parametric knowledge as knowledge acquired during pre-training and stored in a model's parameters, available without external documents, retrieval, or immediate prompt context. Closely related labels, including prior knowledge, internal knowledge, model knowledge, latent knowledge, implicit knowledge, and parametric memory, are used for closely similar meanings, and some papers describe this internal store as what the model falls back on when retrieval is misleading or absent. A smaller line of work narrows the emphasis to task-specific priors before in-context exemplars, language or domain-specific knowledge, multi-task or world knowledge, or factual content that may be present internally but not fully expressed in the final output layer.

**Space of facets.** Papers organize the construct mainly by contrast: what is stored in parameters versus what comes from retrieval, source documents, demonstrations, or other input context. They also use several near-synonymous names for overlapping ideas, especially prior, internal, model, implicit, and latent knowledge, plus parametric memory. Some papers apply the label to factual, world, commonsense, professional, domain-specific, language-specific, task-specific, or multi-task knowledge, and one paper further describes FFN modules as storing internal parametric knowledge while another equates elicited parametric memory with an LLM's internal belief.

**Space of measurement.** Operationalization is concentrated in 1 linked measurement instrument and 2 linked behavioral indicators. The named instrument is MMLU, which papers describe as a multi-task knowledge assessment and, in another case, as primarily assessing parametric knowledge with minimal reasoning; the linked behavioral indicators are knowledge-based question answering, defined as evaluating the model's internal knowledge retained by base models, and factual recall. More broadly, papers often operationalize the construct in closed-book or no-retrieval settings, for example by not allowing access to source documents at test time or by evaluating models when they rely solely on parametric memory, which follows the common definition of knowledge stored in parameters rather than supplied externally.

**Links.** Beyond measurement, papers link the construct to 4 other constructs. One paper reports a correlation between knowledge transfer and parametric knowledge. Separate papers claim causal relationships from parametric knowledge to factuality, weak-to-strong generalization, and factual recall, using formulations such as latent knowledge guiding output self-refinement or eliciting latent knowledge from pre-trained models. Another paper describes parametric knowledge as related to reliability through internal consistency between world knowledge in instruction-tuning data and knowledge embedded within model parameters.

## Sources

**[RA-DIT: Retrieval-Augmented Dual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/536d18fbb454f80221465f1a42c6f389-Paper-Conference.pdf)**
> The knowledge implicitly stored within the parameters of a language model, as opposed to knowledge accessed from an external source.

**[Aggregation Artifacts in Subjective Tasks Collapse Large Language Models' Posteriors](https://aclanthology.org/2025.naacl-long.284.pdf) (as "Prior knowledge")**
> The general knowledge and task-related understanding acquired by a model during its pre-training phase, which influences its predictions independently of in-context examples.

**[VoiceTextBlender: Augmenting Large Language Models with Speech Capabilities via Single-Stage Joint Speech-Text Supervised Fine-Tuning](https://aclanthology.org/2025.naacl-long.298.pdf) (as "Multi-task knowledge")**
> The latent breadth of factual and domain knowledge that supports performance across many subject areas.

**[Analyzing the Effects of Supervised Fine-Tuning on Model Knowledge from Token and Parameter Levels](https://aclanthology.org/2025.emnlp-main.25.pdf) (as "Model knowledge")**
> The latent store of factual world knowledge encoded in a model during pre-training and potentially altered during fine-tuning, which supports accurate responses in closed-book settings.

**[NILE: Internal Consistency Alignment in Large Language Models](https://aclanthology.org/2025.emnlp-main.412.pdf) (as "Internal knowledge")**
> The knowledge acquired by a large language model during its pre-training phase, which is embedded within its parameters.

**[HLM-Cite: Hybrid Language Model Workflow for Text-based Scientific Citation Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/5635925cf9d2274f338eb0dd5971e845-Paper-Conference.pdf) (as "Implicit knowledge")**
> The latent professional or domain-specific knowledge encoded within a model's parameters that is not explicitly provided in the input context.

**[SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf) (as "Latent knowledge")**
> The factual information implicitly learned and stored within the model's internal parameters during training, which may not be fully expressed in the final output layer.

**[Adaptive Chameleon  or Stubborn Sloth: Revealing the Behavior of Large Language Models in Knowledge Conflicts](https://proceedings.iclr.cc/paper_files/paper/2024/file/99261adc8a6356b38bcf999bba9a26dc-Paper-Conference.pdf) (as "Parametric memory")**
> The knowledge stored implicitly within the learned parameters of a language model, as opposed to knowledge accessed from an external source.

**[Prompt Optimization with EASE? Efficient Ordering-aware Automated Selection of Exemplars](https://proceedings.neurips.cc/paper_files/paper/2024/file/dd8e7dae18cecd7c9137840161e1bf62-Paper-Conference.pdf) (as "Task knowledge")**
> The amount of prior task-specific knowledge the model already has before receiving in-context exemplars.

## Relationships

### Parametric knowledge →
- **MMLU** (measurements) — *measured_by*
  > MMLU primarily assesses a model’s parametric knowledge and requires minimal reasoning, thus offering limited benefits from CoT reasoning. (Section 4.3)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)
- **Factuality** (constructs) — *causes*
  > our SLED framework leverages the latent knowledge embedded within the LLM by contrasting the output logits from the final layer with those from early layers. It then utilizes an approximate gradient approach to enable latent knowledge to guide the self-refinement of outputs, thereby effectively improving factual accuracy. (Abstract)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **Weak-to-strong generalization** (constructs) — *causes*
  > We prove that weak-to-strong generalization is possible by eliciting latent knowledge from pre-trained LLMs.
  - [A transfer learning framework for weak to strong generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa47ffc7b2033fd32d8b8734686f6ff4-Paper-Conference.pdf)

### Associated with
- **Knowledge transfer** (constructs)
  > Our findings highlight the critical factors contributing to the process of parametric knowledge transfer, underscoring the transferability of model parameters across LLMs of different scales. (Section 1)
  - [Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf)
- **Knowledge-based question answering** (behaviors tasks)
  > Knowledge-based Question Answering (KG): This type of question evaluates the model’s internal knowledge, which is retained by the base large language models (Section 2.2).
  - [Streaming Video Understanding and Multi-round Interaction with Memory-enhanced Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad2fa437f7c23e4e9875599c6065d18a-Paper-Conference.pdf)
