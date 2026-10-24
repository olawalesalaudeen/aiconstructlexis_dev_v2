# Commonsense question answering
**Type:** Behavior  
**Referenced in:** 63 papers  
**Also known as:** Common-sense question answering, Commonsense completion, Commonsense reasoning, Commonsense inference  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is a task of answering questions, or sometimes completing sentences, that require real-world, everyday, or implicit world knowledge rather than only information stated in the prompt or context. Most formulations use multiple-choice questions, while a smaller group uses binary or true/false responses, sentence completion, or choosing the most plausible cause, effect, or continuation. Success is usually described as giving the correct answer or selecting the most plausible option, and one paper contrasts settings where "the model is given only the questions" with settings where it is "provided with the questions and some of the evidence".

**Variants.** Authors also refer to this behavior as commonsense reasoning, commonsense completion, or commonsense inference. Variants most often appear in benchmarks centered on PIQA, HellaSwag, and WinoGrande, though some papers use boolean or true/false questions such as StrategyQA or paired-choice plausibility settings such as XCOPA. Other variants include reading-comprehension-style questions, cause-and-effect prompts, and continuation tasks.

**Space of elicitation and scores.** Papers connect the behavior to 7 measurement instruments, all benchmark datasets or dataset collections. The most frequently linked are CommonsenseQA, WinoGrande, BoolQ, Commonsense170K, and HellaSwag. Scoring is usually reported as accuracy, often in zero-shot evaluation, though some papers use few-shot settings and one paper states, "For commonsense reasoning, we fine-tune on the Commonsense170K dataset".

**What it is taken as evidence of.** The only construct-level link in papers connects this behavior to commonsense reasoning, and that link is described as related rather than as a measurement, correlation, or causal claim. The supporting paper states that answering commonsense questions correctly requires "not only knowledge but also reasoning," so the behavior is treated as related to a reasoning construct. No other construct link is described.

## Sources

**[BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)**
> The observable task of answering questions or completing sentences that require real-world, everyday knowledge, as evaluated on benchmarks like PIQA, HellaSwag, and WinoGrande.

**[R-Sparse: Rank-Aware Activation Sparsity for Efficient LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/c0c165157df7e3082f9c6d70d3a4b6e9-Paper-Conference.pdf) (as "Common-sense question answering")**
> The observable behavior of answering questions that require background knowledge about the world, often in a multiple-choice or completion format.

**[Low-Rank Adapting Models for Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25r/chen25r.pdf) (as "Commonsense completion")**
> The observable behavior of selecting the most plausible continuation for a given text, testing commonsense inference.

**[BIG5-CHAT: Shaping LLM Personalities Through Training on Human-Grounded Data](https://aclanthology.org/2025.acl-long.999.pdf) (as "Commonsense reasoning")**
> The observable task of answering questions or completing sentences that require real-world, everyday knowledge and reasoning.

**[Mixture of Lookup Experts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jie25b/jie25b.pdf) (as "Commonsense inference")**
> The task of choosing the most plausible cause or effect for a given premise from a pair of choices, requiring commonsense knowledge.

## Relationships

### Commonsense question answering →
- **CommonsenseQA** (measurements) — *measured_by*
  > CommonSenseQA (Talmor et al., 2019): This dataset offers a collection of multi-choice questions that test commonsense reasoning. (Section 3.1)
  - [Large Language Models Cannot Self-Correct Reasoning Yet](https://proceedings.iclr.cc/paper_files/paper/2024/file/8b4add8b0aa8749d80a34ca5d941c355-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > ...we list in Table 4 (b–c) the accuracy of our quantized Llama-2 models on the ARC-C, -E (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2019) and Winogrande (Sakaguchi et al., 2021) common sense question answering... (Section 4)
  - [Radio: Rate–Distortion Optimization for Large Language Model Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/young25b/young25b.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > ...we list in Table 4 (b–c) the accuracy of our quantized Llama-2 models on the ARC-C, -E (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2019) and Winogrande (Sakaguchi et al., 2021) common sense question answering... (Section 4)
  - [Radio: Rate–Distortion Optimization for Large Language Model Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/young25b/young25b.pdf)
- **PIQA** (measurements) — *measured_by*
  > ...we list in Table 4 (b–c) the accuracy of our quantized Llama-2 models on the ARC-C, -E (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2019) and Winogrande (Sakaguchi et al., 2021) common sense question answering... (Section 4)
  - [Radio: Rate–Distortion Optimization for Large Language Model Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/young25b/young25b.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > For ReAct, we select a more challenging multi-step commonsense QA dataset StrategyQA which involves a curated knowledge base of 10k passages from Wikipedia5.
  - [AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb113910e9c3f6242541c1652e30dfd6-Paper-Conference.pdf)

### Associated with
- **Commonsense reasoning** (constructs)
  > answering commonsense questions correctly requires not only knowledge but also reasoning—even for seemingly simple questions. (Abstract)
  - [Beyond Surface Simplicity: Revealing Hidden Reasoning Attributes for Precise Commonsense Diagnosis](https://aclanthology.org/2025.acl-long.627.pdf)
