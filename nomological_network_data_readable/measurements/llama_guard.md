# Llama Guard
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** LLaMA Guard 7B, LlamaGuard, Llama-Guard, LlamaGuard-7B  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats Llama Guard as an LLM-based or model-based safety classifier, guardrail, or safeguard for prompts and responses. Definitions describe it as judging whether outputs are harmful, unsafe, safe, or harmless, and also as an evaluation tool that can calculate Attack Success Rate by classifying response harmfulness. A smaller line names 7B variants, LLaMA Guard 7B or LlamaGuard-7B, as open-source guard models or dedicated safety classifiers; other papers describe it as a pretrained content-moderation guardrail, an input-output safeguard used as an NSFW filter, or a safety mechanism deployed on selected communication edges in multi-agent systems.

**What it is claimed to measure.** Papers link Llama Guard to 2 constructs and 3 behavioral indicators. The most recurring measurement claim is Harmlessness, where papers use Llama-Guard to determine the safety of the responses; other papers report it as measuring Toxicity, Harmful content generation, Jailbreaking, and Safety classifier evasion. Overall, the measurement claims are spread across several safety-related targets rather than centered on a single construct.

**Space of uses.** Papers typically use it as a judgment model or filter: prompts and responses are classified with it, VLM harmfulness is scored through ASR via it, and one paper applies it as an NSFW filter to collected user prompts. Some work uses it alongside GPT-4, ShieldGemma, and other open-source guard models, while other papers position it as a baseline for agent safety tasks or as a safety mechanism on selected edges in multi-agent systems. Papers do not link it to any other measurement instrument.

**Concerns raised.** Concerns center on task fit and robustness. One paper says LlamaGuard was designed to detect harmful content in LLM inputs and outputs and "is not aligned with the safety guard requests for agents," and another reports that safety mechanisms including Llama-Guard "fail to defend against our attack." A further line of work evaluates bypass rate, defined as cases where a malicious request is classified as safe.

## Sources

**[Layer-wise Alignment: Examining Safety Alignment Across Image Encoder Layers in Vision Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bachu25a/bachu25a.pdf)**
> An evaluation tool used to classify model responses and calculate the Attack Success Rate (ASR) by determining if an output is harmful.

**[FlipAttack: Jailbreak LLMs via Flipping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25z/liu25z.pdf) (as "LLaMA Guard 7B")**
> A 7-billion parameter open-source guard model used as an instrument to evaluate the effectiveness of jailbreak attacks at bypassing safety filters.

**[GuardAgent: Safeguard LLM Agents via Knowledge-Enabled Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiang25a/xiang25a.pdf) (as "LlamaGuard")**
> Pretrained LLM-based guardrail system designed for content moderation in text, used here as a baseline to test its applicability to agent safety tasks.

**[Ambiguity Awareness Optimization: Towards Semantic Disambiguation for Direct Preference Optimization](https://aclanthology.org/2025.emnlp-main.460.pdf) (as "Llama-Guard")**
> A model-based evaluation tool used to classify the safety and harmlessness of LLM-generated responses.

**[SG-Bench: Evaluating LLM Safety Generalization Across Diverse Tasks and Prompt Types](https://proceedings.neurips.cc/paper_files/paper/2024/file/de7b99107c53e60257c727dc73daf1d1-Paper-Datasets_and_Benchmarks_Track.pdf) (as "LlamaGuard-7B")**
> An LLM-based safety classifier used to judge whether prompts or responses are unsafe.

## Relationships

### → Llama Guard
- **Harmlessness** (constructs) — *measured_by*
  > For harmlessness evaluation, we ... used Llama-Guard (Inan et al., 2023) to determine the safety of the responses...
  - [TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights](https://proceedings.iclr.cc/paper_files/paper/2025/file/7fb9f39075a5202472676a7531568212-Paper-Conference.pdf)
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > For LLM-based evaluation, we employ LlamaGuard (Inan et al., 2023) and GPT-4 (Souly et al., 2024) to assess whether the response is safe for the given instruction. (Section 5.1)
  - [Jailbreaking as a Reward Misspecification Problem](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf00c2fdf92882989b1fc0e3094a2abf-Paper-Conference.pdf)
- **Toxicity** (constructs) — *measured_by*
  > To measure effectiveness of each method, we compute the toxicity rate which is the percentage of generated prompts that are toxic. We consider a prompt toxic if the toxicity classifier $p_\psi$ assigns a score greater than 0.5 to an input pair consisting of the prompt x and response y generated by the target LLM. For $p_\psi$, we use a RoBERTa hate speech classifier (Vidgen et al., 2021) for GPT-2 and dolly-v2-7b, and Llama-Guard (Inan et al., 2023) for Llama-2-7b-chat, Llama-3.1-8B-Instruct, and Gemma-2b-it.
  - [Learning Diverse Attacks on Large Language Models for Robust Red-Teaming and Safety Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e128701ceca0ba03658a305faf39deb-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > To evaluate the VLM output harmfulness, we use the Attack Success Rate (ASR) metric via Llama Guard (Inan et al., 2023), following prior works (Zou et al., 2023; Shayegani et al., 2024; Luo et al., 2024). (Section 4.1)
  - [Layer-wise Alignment: Examining Safety Alignment Across Image Encoder Layers in Vision Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bachu25a/bachu25a.pdf)
