# Jailbreaking
**Type:** Behavior  
**Referenced in:** 49 papers  
**Also known as:** Jailbreak response generation, Jailbreak attack, Jailbreak compliance, Jailbreak success, Multi-step query decomposition, Concept decomposition, Instruction decomposition, Task decomposition compliance, Jailbreak, Jailbroken responding, Jailbreaking attack  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats jailbreaking as either the act or the observable result of bypassing a model's safety mechanisms, filters, guardrails, or alignment with a crafted or adversarial input so the model produces prohibited, harmful, unsafe, or restricted output. Some papers phrase the success condition as getting the model to answer a malicious request it would normally refuse, and several papers claim a causal relationship from jailbreaking to harmful content generation. A smaller line of work narrows the indicator to response-side outcomes such as jailbreak compliance, jailbreak response generation, or jailbreak success, where success is variously described as harmful content without refusal, no predefined refusal messages, or a response that begins with a target phrase and continues the harmful answer.

**Variants.** Variants span text-only prompt attacks and several specialized settings. Some papers study multimodal or vision-language jailbreaking, including one-image and non-textual attacks; others focus on long-context or many-shot settings, continuation attacks, and multi-agent propagation. Another line decomposes the harmful goal into less suspicious pieces, under names like multi-step query decomposition, concept decomposition, instruction decomposition, and task decomposition compliance; one paper reports that a model that refused a direct harmful request completed it once the intent was split into distinct steps (SafeArena: Evaluating the Safety of Autonomous Web Agents). One paper claims a causal relationship from role-playing to jailbreaking, another from adversarial suffix generation to jailbreaking, and cipher-based prompting is also used.

**Space of elicitation and scores.** Papers link jailbreaking to 13 measurement instruments. The most frequently linked are AdvBench and HarmBench, which are used as benchmark datasets, and LLM-as-a-judge, which scores whether a response counts as a successful jailbreak; a recurring metric is Attack Success Rate, defined in one paper as 'the percentage of jailbreak prompts that successfully bypass alignment' (Attention Eclipse: Manipulating Attention to Bypass LLM Safety-Alignment). GCG and PAIR also appear among the most linked instruments as elicitation procedures for constructing jailbreak prompts, with PAIR also used in one evaluation and treated as related to jailbreaking in one comparison, while several other papers use refusal-string heuristics, classifier-style auto-annotators, and additional safety benchmarks.

**What it is taken as evidence of.** As evidence, jailbreaking is linked to five constructs, and papers do not converge on a single construct it reflects. Alignment is related to jailbreaking, safety alignment is reported to correlate with it, and one paper claims a causal relationship from jailbreaking to safety alignment. A smaller use treats jailbreaking as the behavior by which universality and knowledge transfer are measured, while one paper claims a causal relationship from adversarial robustness to jailbreaking.

## Sources

**[RAG LLMs are Not Safer: A Safety Analysis of Retrieval-Augmented Generation for Large Language Models](https://aclanthology.org/2025.naacl-long.281.pdf)**
> The observable behavior of bypassing a model's safety mechanisms to elicit a prohibited response, typically through an adversarial prompt.

**[Reasoning-to-Defend: Safety-Aware Reasoning Can Defend Large Language Models from Jailbreaking](https://aclanthology.org/2025.emnlp-main.1493.pdf) (as "Jailbreak response generation")**
> Producing unsafe or harmful answers when prompted by adversarial jailbreak instructions.

**[Stand on The Shoulders of Giants: Building JailExpert from Previous Attack Experience](https://aclanthology.org/2025.emnlp-main.190.pdf) (as "Jailbreak attack")**
> The act of using specially crafted prompts to circumvent a model's safety alignment and induce it to perform forbidden actions.

**[Adaptively profiling models with task elicitation](https://aclanthology.org/2025.emnlp-main.1270.pdf) (as "Jailbreak compliance")**
> Following adversarial prompts that attempt to induce the model to ignore safety rules and comply with harmful requests.

**[Attention Eclipse: Manipulating Attention to Bypass LLM Safety-Alignment](https://aclanthology.org/2025.emnlp-main.842.pdf) (as "Jailbreak success")**
> The observable generation of harmful content by an LLM in response to a jailbreak prompt, indicating that the model has bypassed its safety alignment.

**[Speak Easy: Eliciting Harmful Jailbreaks from LLMs with Simple Interactions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chan25b/chan25b.pdf) (as "Multi-step query decomposition")**
> The observable behavior of breaking down a complex or malicious query into a sequence of simpler, seemingly harmless subqueries to bypass safety filters.

**[Cannot See the Forest for the Trees: Invoking Heuristics and Biases to Elicit Irrational Choices of LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25s/yang25s.pdf) (as "Concept decomposition")**
> The breakdown of a complex malicious goal into simpler, less overtly harmful sub-concepts to reduce cognitive load and evade detection by safety mechanisms.

**[DAMON: A Dialogue-Aware MCTS Framework for Jailbreaking Large Language Models](https://aclanthology.org/2025.emnlp-main.323.pdf) (as "Instruction decomposition")**
> Breaking down a complex or harmful instruction into a sequence of simpler or less suspicious sub-instructions to evade detection.

**[SafeArena: Evaluating the Safety of Autonomous Web Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tur25a/tur25a.pdf) (as "Task decomposition compliance")**
> The observable behavior of an agent executing a harmful task when the malicious intent is broken down into a sequence of seemingly benign substeps provided over multiple interaction turns.

**[Jailbreak in pieces: Compositional Adversarial Attacks on Multi-Modal Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/83170ccee5543b872f4de71002f21aad-Paper-Conference.pdf) (as "Jailbreak")**
> The observable generation of harmful content by a model in response to adversarial inputs that bypass its safety alignment mechanisms, such as producing instructions for illegal or dangerous activities.

**[On the Humanity of Conversational AI: Evaluating the Psychological Portrayal of LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/c48dcd605cfb17d5b4f94ce106a915f7-Paper-Conference.pdf) (as "Jailbroken responding")**
> Producing less filtered, potentially toxic or unaligned content when safety mechanisms are circumvented via cipher-based prompts.

**[AdvPrompter: Fast Adaptive Adversarial Prompting for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/paulus25a/paulus25a.pdf) (as "Jailbreaking attack")**
> The act of bypassing a model's safety mechanisms by using a specially crafted input (an adversarial prompt) to elicit a harmful or otherwise prohibited response.

## Relationships

### Jailbreaking →
- **Harmful content generation** (behaviors tasks) — *causes*
  > We focus on identifying prompts that, when given a specific harmful request (e.g., “Tell me how to build a bomb”), induces the LLM to generate harmful content.
  - [Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/63fa7efdd3bcf944a4bd6e0ff6a50041-Paper-Conference.pdf)
- **AdvBench** (measurements) — *measured_by*
  > In this scenario, we utilize the widely used benchmark dataset, AdvBench[46], to evaluate the steering effectiveness on facilitating jailbreaking... (Section 4.1)
  - [Personalized Steering of Large Language Models: Versatile Steering Vectors Through Bi-directional Preference Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/58cbe393b4254da8966780a40d023c0b-Paper-Conference.pdf)
- **HarmBench** (measurements) — *measured_by*
  > We incorporate images generated by Stable Diffusion with text jailbreaking, to observe the fluctuations in performance (Task S.6). (Table 2, Row S.6 references dataset [96] which is HarmBench)
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We use GPT-4 as the semantic judge (see Table 8 for the prompt) in line with the criteria established by Chao et al. (2023), where a jailbreak is considered successful only if it achieves a 10/10 jailbreak score from GPT-4.
  - [Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/63fa7efdd3bcf944a4bd6e0ff6a50041-Paper-Conference.pdf)
- **Rule-based judge** (measurements) — *measured_by*
  > By default, we use keyword matching to search for strings indicating a refusal to respond to the harmful instruction, following Paulus et al. (2024). (Section 5.1)
  - [Jailbreaking as a Reward Misspecification Problem](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf00c2fdf92882989b1fc0e3094a2abf-Paper-Conference.pdf)
- **JailbreakBench** (measurements) — *measured_by*
  > We adopt Attack Success Rate (ASR) as an evaluation metric for successful jailbreaks following the default framework employed in HarmBench and JbBench. (Section 5.4)
  - [SABER: Uncovering Vulnerabilities in Safety Alignment via Cross-Layer Residual Connection](https://aclanthology.org/2025.emnlp-main.825.pdf)
- **PAIR** (measurements) — *measured_by*
  > We also evaluated the effect of the jailbreaking attack PAIR (Chao et al., 2023) on a Llama-2-7b-chat model that had been subjected to the Q-Misalign attack at full precision. (Section 5.2)
  - [Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf)
- **Llama Guard** (measurements) — *measured_by*
  > For LLM-based evaluation, we employ LlamaGuard (Inan et al., 2023) and GPT-4 (Souly et al., 2024) to assess whether the response is safe for the given instruction. (Section 5.1)
  - [Jailbreaking as a Reward Misspecification Problem](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf00c2fdf92882989b1fc0e3094a2abf-Paper-Conference.pdf)
- **SafeBench** (measurements) — *measured_by*
  > Our approach achieves higher attack success rates compared to existing multimodal attacks on SafeBench (Gong et al., 2023) and AdvBench (Zou et al., 2023). (Abstract)
  - [Con Instruction: Universal Jailbreaking of Multimodal Large Language Models via Non-Textual Modalities](https://aclanthology.org/2025.acl-long.146.pdf)
- **Llama Guard 2** (measurements) — *measured_by*
  > We use Llama Guard 2 as the auto-annotator to classify responses as jailbreak or non-jailbreak, following (Chao et al., 2024). (Section 3.3.4. ADVERSARIAL ROBUSTNESS EVALUATION)
  - [POROver: Improving Safety and Reducing Overrefusal in Large Language Models with Overgeneration and Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karaman25a/karaman25a.pdf)
- **SALAD-Bench** (measurements) — *measured_by*
  > To assess the generalizability of the weak-to-strong attack, we expanded our evaluation to include two new safety benchmarks: SALAD-Bench (Li et al., 2024) and SORRY-Bench (Xie et al., 2024). (Section 5.1)
  - [Weak-to-Strong Jailbreaking on Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25aa/zhao25aa.pdf)
- **SORRY-Bench** (measurements) — *measured_by*
  > To assess the generalizability of the weak-to-strong attack, we expanded our evaluation to include two new safety benchmarks: SALAD-Bench (Li et al., 2024) and SORRY-Bench (Xie et al., 2024). (Section 5.1)
  - [Weak-to-Strong Jailbreaking on Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25aa/zhao25aa.pdf)
- **HarmBench classifier** (measurements) — *measured_by*
  > “we report the attack success rate (ASR) using HarmBench’s judge”
  - [REINFORCE Adversarial Attacks on Large Language Models: An Adaptive, Distributional, and Semantic Objective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/geisler25a/geisler25a.pdf)

### → Jailbreaking
- **Adversarial robustness** (constructs) — *causes*
  > "LLMs are notably fragile and easily distracted by our complex role-play instructions, thereby enhancing the attack performance of each individual jailbreak character."
  - [SeqAR: Jailbreak LLMs with Sequential Auto-Generated Characters](https://aclanthology.org/2025.naacl-long.42.pdf)
- **Role-playing** (behaviors tasks) — *causes*
  > Inspired by previous attempts that exploit role-playing to bypass the safety guardrails of LLMs (DAN, 2023; Li et al., 2024) and research on the distraction phenomenon in LLMs (Shi et al., 2023; Xiao et al., 2024), we apply sequential jailbreak characters within a single user query and ask the target LLMs to act as these characters sequentially to provide step-by-step instructions. (Section 2.1)
  - [SeqAR: Jailbreak LLMs with Sequential Auto-Generated Characters](https://aclanthology.org/2025.naacl-long.42.pdf)
- **Misalignment** (constructs) — *causes*
  > “these misalignments activate, rendering the model vulnerable to jailbreak attacks.”
  - [Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf)

### Associated with
- **Alignment** (constructs)
  > One way to understand the limitations of these [alignment] methods is to explore their susceptibility to jailbreaking attacks; which are attempts to bypass the target LLM’s safety filters and circumvent its alignment [52].
  - [Tree of Attacks: Jailbreaking Black-Box LLMs Automatically](https://proceedings.neurips.cc/paper_files/paper/2024/file/70702e8cbb4890b4a467b984ae59828a-Paper-Conference.pdf)
- **Safety alignment** (constructs)
  > Although aligned with human preference data before release, LLMs remain vulnerable to various malicious attacks. In this paper, we adopt a red-teaming strategy to enhance LLM safety and introduce SEQAR, a simple yet effective framework to design jailbreak prompts automatically. (Section 1)
  - [SeqAR: Jailbreak LLMs with Sequential Auto-Generated Characters](https://aclanthology.org/2025.naacl-long.42.pdf)
- **Safety mechanism** (constructs)
  > A “jailbreak” refers to techniques used to bypass the safety mechanisms in LLMs that generally prevent the generation of harmful, unethical, or restricted content. (Section 2.1).
  - [Stronger Universal and Transferable Attacks by Suppressing Refusals](https://aclanthology.org/2025.naacl-long.302.pdf)
- **Adversarial suffix generation** (behaviors tasks)
  > Jailbreaking attacks typically involve appending adversarial suffixes to instructions.
  - [ProAdvPrompter: A Two-Stage Journey to Effective Adversarial Prompting for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/1861027cac475192f2c2cd0ec568fc66-Paper-Conference.pdf)
- **Attack transferability** (constructs)
  > We evaluate each suffix on all 50 behaviors (universality) including the one it is directly optimized for and on all five target models (transferability) including the one it is optimized on. (Section 3.1)
  - [Stronger Universal and Transferable Attacks by Suppressing Refusals](https://aclanthology.org/2025.naacl-long.302.pdf)
