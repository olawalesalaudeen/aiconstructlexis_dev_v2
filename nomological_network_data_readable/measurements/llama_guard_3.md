# Llama Guard 3
**Type:** Measurement  
**Referenced in:** 22 papers  
**Also known as:** Llama-Guard-3-8B, Llama-Guard-3, LlamaGuard 3, Llama-Guardv3-8B, Llama-guard-3, Llama-Guard3-8B  

## State of the Field

**What it is.** Across the papers, the dominant framing is Llama Guard 3 as an automated content safety classifier or judge for prompts and model responses. Most descriptions refer to an 8B variant and describe it as a content safety classification LLM that labels text as safe or unsafe, scores harmfulness or toxicity, or identifies harmful categories such as violence, self-harm, illegal activities, and inappropriate sexual content; one paper also specifies it as a Llama-3.1-8B-based model fine-tuned for content safety classification. A smaller line of work treats it as a moderation defense or external guardrail for detecting jailbreak attempts and unsafe content.

**What it is claimed to measure.** Papers link it to one behavioral indicator and three constructs. The recurring use is to measure harmful content generation by evaluating the harmfulness of model responses, while other papers report that harmlessness, safety, and safety alignment are measured by it, often through content safety classification or harmfulness scoring. The linked claims therefore center on several named outcomes rather than a single target.

**Space of uses.** No other measurement instrument is linked to it. Papers most often position it as an automated evaluator in red-teaming, jailbreak, alignment, and fairness setups, including as a safety classifier for generated responses, an auxiliary detection tool, an external guardrail within JailbreakBench, and, in one setup, a tool used "on top of sub-string matching" (Activation Space Interventions Can Be Transferred Between Large Language Models). One study says it is adopted as the safety evaluator because of its "strong alignment with human judgment" and effectiveness for long-form, reasoning-based outputs, and another framing uses it to evaluate a model's refusal rate to harmful queries.

## Sources

**[Neural Genetic Search in Discrete Spaces](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kim25b/kim25b.pdf) (as "Llama-Guard-3-8B")**
> A safety classifier used to score whether generated responses are toxic in the red-teaming experiment.

**[Activation Space Interventions Can Be Transferred Between Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oozeer25a/oozeer25a.pdf) (as "Llama-Guard-3")**
> A safety classifier model that evaluates whether a prompt or response is safe or unsafe, used to assess refusal behavior and jailbreak resistance.

**[Layer-Aware Representation Filtering: Purifying Finetuning Data to Preserve LLM Safety Alignment](https://aclanthology.org/2025.emnlp-main.406.pdf) (as "LlamaGuard 3")**
> A Llama-3.1-8B-based model fine-tuned for content safety classification, used as an automated evaluator to assess the harmfulness of model outputs.

**[Reasoning-to-Defend: Safety-Aware Reasoning Can Defend Large Language Models from Jailbreaking](https://aclanthology.org/2025.emnlp-main.1493.pdf) (as "Llama-Guardv3-8B")**
> A specific language model used as an external guardrail or automated judge to classify the safety of responses within the JailbreakBench evaluation framework.

**[Stealthy Jailbreak Attacks on Large Language Models via Benign Data Mirroring](https://aclanthology.org/2025.naacl-long.88.pdf)**
> A semantic classifier capable of identifying various types of harmful content, including violence, self-harm, illegal activities, and inappropriate sexual content, used as a discriminator in attack evaluation.

**[Audio Is the Achilles' Heel: Red Teaming Audio Large Multimodal Models](https://aclanthology.org/2025.naacl-long.470.pdf) (as "Llama-guard-3")**
> Automated content moderation system used as a judge to classify model-generated responses as harmful or safe based on predefined safety policies.

**[LSSF: Safety Alignment for Large Language Models through Low-Rank Safety Subspace Fusion](https://aclanthology.org/2025.acl-long.1479.pdf) (as "Llama-Guard3-8B")**
> A specialized language model used as an evaluation tool to assess the safety of other models' outputs by measuring their refusal rate to harmful queries.

## Relationships

### → Llama Guard 3
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > Then evaluate the harmfulness score on its responses with the Llama-Guard-3-8B (Llama Team, 2024). We use 70% harmful prompts in the AdvBench dataset (Zou et al., 2023b) for InferAligner, Vaccine, and our SaLoRA. (Section 5.1).
  - [SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf)
- **Safety** (constructs) — *measured_by*
  > To measure ASR, we utilize LLaMA-Guard 3 8B (Inan et al., 2023), a LLM trained for content safety classification. (Section 3.4)
  - [How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf)
- **Safety alignment** (constructs) — *measured_by*
  > “Then evaluate the harmfulness score on its responses with the Llama-Guard-3-8B (Llama Team, 2024).”
  - [SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > For evaluating if a generated response is harmless, we use an off-the-shelf LLM, Llama-Guard-3-8B (Llama Team, 2024), which is fine-tuned for content safety classification task to assess the safety of the generated text (Section 4.3).
  - [Constrained Decoding with Speculative Lookaheads](https://aclanthology.org/2025.naacl-long.239.pdf)
