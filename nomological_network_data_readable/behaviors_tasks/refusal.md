# Refusal
**Type:** Behavior  
**Referenced in:** 129 papers  
**Also known as:** Evasive response generation, Harmful query rejection, Unsafe prompt rejection, Toxic prompt rejection, Avoidance, Harmful content rejection, Refusal to answer, Refusal behavior, Refusal generation, Faithful reasoning, Punting, Answer refusal, Response refusal, Refusal to respond, Abstention, Rejecting request  

## State of the Field

**Space of definitions.** Across the surveyed definitions, the dominant framing is explicit non-compliance: models abstain from answering harmful, malicious, unsafe, toxic, or policy-violating prompts, often with stock statements such as I cannot fulfill your request or I'm sorry, but I can't assist with that request. Many papers count a direct decline as refusal, while others also count generic replies, answers to a different question, error messages, or safer redirections; smaller lines of work extend the behavior to knowledge limits, missing or contradictory information, privacy-sensitive requests, selecting a not sure option, or declining to choose any invalid answer. Several papers also separate appropriate refusal on harmful inputs from over-refusal on reasonable requests or safe contexts.

**Variants.** Papers use many nearby labels, including harmful query rejection, unsafe prompt rejection, toxic prompt rejection, harmful content rejection, refusal to answer, refusal behavior, refusal generation, response refusal, answer refusal, abstention, and rejecting request. The prevailing settings are safety and jailbreak evaluation on harmful user requests, but smaller strands study hate speech prompts, politically sensitive questions, multilingual and multimodal tasks, moral dilemmas, copyright-blocklisted content, knowledge-boundary question answering, medical hallucination detection, and uncomputable medical inputs. Related minority formulations are avoidance or evasive response generation, where the model gives a related but non-responsive answer, and punting, where uncertainty prompting leads the model to avoid answering altogether.

**Space of elicitation and scores.** Papers link refusal to 9 measurement instruments, including AdvBench, Alpaca instruction dataset, CAA, CSRT, and Databricks Dolly-15k, plus 4 others. These instruments commonly elicit refusal with harmful or high-risk prompts, synthetic refusal versus compliance targets, or concept probes, and they score it through refusal rate, jailbreak attack success, safety versus over-refusal tradeoffs, refusal-phrase matching, or a judge that decides whether the model actually answered the harmful query.

**What it is taken as evidence of.** Papers link refusal to 11 constructs. Helpfulness is the most recurrent construct, but the recorded links are mixed: papers variously treat refusal as related to helpfulness, report a correlation with helpfulness, or claim a causal relationship from refusal to helpfulness by describing refused answers as unhelpful. Safety alignment is the next common construct, with several papers claiming a causal relationship from safety alignment to refusal and another treating refusal as related to safety alignment; beyond that, honesty is related to refusal, alignment is claimed to have a causal relationship to refusal, commonsense reasoning is the target of a claimed causal relationship from refusal, and 6 other constructs are also linked, so papers do not converge on a single construct that refusal alone is taken to reflect.

## Sources

**[Catastrophic Jailbreak of Open-source LLMs via Exploiting Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/3af25aa3de8b7b02ddbd1b6be5031be8-Paper-Conference.pdf)**
> The model's observable behavior of abstaining from responding to a malicious instruction, typically by stating it cannot assist with harmful requests.

**[A Distributional Approach to Uncertainty-Aware Preference Alignment Using Offline Demonstrations](https://proceedings.iclr.cc/paper_files/paper/2025/file/084cf2b3d73abafa1705336a0e9ebb1c-Paper-Conference.pdf) (as "Evasive response generation")**
> The model's behavior of avoiding a direct answer to a prompt, often as a safety mechanism, which can sometimes be an undesirable side effect of alignment.

**[On the Role of Attention Heads in Large Language Model Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/d0bcff6425bbf850ec87d5327a965db9-Paper-Conference.pdf) (as "Harmful query rejection")**
> The observable behavior of a model refusing to answer a harmful or malicious query, often by outputting a canned refusal phrase.

**[SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf) (as "Unsafe prompt rejection")**
> The model declining or refusing to answer requests that are dangerous, unethical, or violate safety policies.

**[OR-Bench: An Over-Refusal Benchmark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cui25a/cui25a.pdf) (as "Toxic prompt rejection")**
> The observable behavior where a model correctly refuses to respond to a harmful or dangerous user request.

**[HPS: Hard Preference Sampling for Human Preference Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zou25c/zou25c.pdf) (as "Harmful content rejection")**
> The observable behavior of a model refusing to generate outputs that are inappropriate, offensive, or malicious.

**[Position: Political Neutrality in AI Is Impossible — But Here Is How to Approximate It](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fisher25a/fisher25a.pdf) (as "Avoidance")**
> The observable behavior of providing a related but non-responsive answer to a politically sensitive query, without directly addressing the input.

**[Perception of Knowledge Boundary for Large Language Models through Semi-open-ended Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/a1e0d6fa0c30b7d4f75dd9c7ed6189f2-Paper-Conference.pdf) (as "Refusal to answer")**
> The action of explicitly declining to provide an answer to a question, often by stating an inability to do so or citing knowledge limitations.

**[Assessing Safety Risks and Quantization-aware Safety Patching for Quantized Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ci/chen25ci.pdf) (as "Refusal behavior")**
> The observable act of a model declining to respond to a harmful or unsafe prompt, indicating intact safety mechanisms.

**[Improving LLM Safety Alignment with Dual-Objective Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25c/zhao25c.pdf) (as "Refusal generation")**
> Producing responses that decline to answer harmful queries, often using phrases like 'Sorry, I can’t provide that information'.

**[CMedCalc-Bench: A Fine-Grained Benchmark for Chinese Medical Calculations in LLM](https://aclanthology.org/2025.emnlp-main.1302.pdf) (as "Faithful reasoning")**
> The latent tendency of a model to abstain from answering when faced with missing or contradictory input information, reflecting clinical safety awareness.

**[MetaFaith: Faithful Natural Language Uncertainty Expression in LLMs](https://aclanthology.org/2025.emnlp-main.1505.pdf) (as "Punting")**
> The model's tendency to avoid answering a question altogether, often as a result of over-cautiousness induced by uncertainty prompts.

**[JMMMU: A Japanese Massive Multi-discipline Multimodal Understanding Benchmark for Culture-aware Evaluation](https://aclanthology.org/2025.naacl-long.43.pdf) (as "Answer refusal")**
> The model's observable action of declining to respond to a user's query, often for safety, privacy, or capability-limitation reasons.

**[Decoding Hate: Exploring Language Models' Reactions to Hate Speech](https://aclanthology.org/2025.naacl-long.45.pdf) (as "Response refusal")**
> Opting not to engage with a hate speech prompt, either by declining to answer or returning an error message.

**[HISTOIRESMORALES: A French Dataset for Assessing Moral Alignment](https://aclanthology.org/2025.naacl-long.131.pdf) (as "Refusal to respond")**
> An observable behavior where the model declines to provide an answer to a prompt, often for safety or capability reasons.

**[Knowledge Graph Guided Evaluation of Abstention Techniques](https://aclanthology.org/2025.naacl-long.353.pdf) (as "Abstention")**
> The observable behavior of a model refusing to provide a direct answer to a user's query, often accompanied by a statement of inability or unwillingness to respond.

**[CONFETTI: Conversational Function-Calling Evaluation Through Turn-Level Interactions](https://aclanthology.org/2025.acl-long.394.pdf) (as "Rejecting request")**
> Producing responses that decline to perform a user request, typically due to unsupported functionality or policy constraints.

## Relationships

### Refusal →
- **Helpfulness** (constructs) — *causes*
  > ...a model that refuses to answer, while technically considered harmless, renders the response quite unhelpful [16].
  - [Stepwise Alignment for Constrained Language Model Policy Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/bcfcf7232cb74e1ef82d751880ff835b-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *causes*
  > The bottom radar maps show that they fall behind in knowledge, information extraction, and commonsense reasoning compared to GPT-4o, partially because of this refusal behavior.
  - [MEGA-Bench: Scaling Multimodal Evaluation to over 500 Real-World Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/461f1fd5f92e5ca95764a88304dc39f7-Paper-Conference.pdf)
- **CAA** (measurements) — *measured_by*
  > Seven concepts, relevant to the helpful, honest, and harmless of LLMs, are included from CAA dataset (Rimsky et al., 2024): AI Coordination (AIC., for short), Corrigibility (CORR.), Hallucination (HALLU.), Myopic Reward (MR.), Survival Instinct (SI.), Sycophancy (SYC.), and Refusal (REF.).
  - [Cross-model Transferability among Large Language Models on the Platonic Representations of Concepts](https://aclanthology.org/2025.acl-long.185.pdf)
- **StrongREJECT** (measurements) — *measured_by*
  > For generation, we use data from the StrongREJECT task (Souly et al., 2024). In particular, we measure the refusal rate of the model on harmful prompts, with the attack considered to have succeeded if a GPT-4o judge (gpt-4o-2024-05-13) considers the model to have answered the question. (Section 3)
  - [Scaling Trends in Language Model Robustness](https://raw.githubusercontent.com/mlresearch/v267/main/assets/howe25a/howe25a.pdf)
- **Fairness** (constructs) — *causes*
  > Refusal effectively avoids generating controversial or biased output, ensuring fairness and safety. (Section 3.1)
  - [Position: Political Neutrality in AI Is Impossible — But Here Is How to Approximate It](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fisher25a/fisher25a.pdf)
- **AdvBench** (measurements) — *measured_by*
  > on a set of 520 high-risk queries from AdvBench (Zou et al., 2023), all 9 LRMs models... consistently exhibited a significant drop in overall refusal rate under first-person prompting (Section 3.1)
  - [Path Drift in Large Reasoning Models: How First-Person Commitments Override Safety](https://aclanthology.org/2025.emnlp-main.990.pdf)

### → Refusal
- **Safety alignment** (constructs) — *causes*
  > In response, researchers have developed several methods to enhance LLM safety, known as safety alignment, including supervised fine-tuning (SFT) (Ouyang et al., 2022) and reinforcement learning from human feedback (RLHF) (Bai et al., 2022; Dai et al., 2024). As a result of these advancements, pre-trained LLMs like GPT-4 (OpenAI, 2023) and Llama (Touvron et al., 2023b) have become more adept at rejecting unsafe prompts.
  - [SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf)
- **Alignment** (constructs) — *causes*
  > aligned LLMs readily refuse to answer many inappropriate prompts where the factual answer, e.g., could cause harm. (Section 1)
  - [REINFORCE Adversarial Attacks on Large Language Models: An Adaptive, Distributional, and Semantic Objective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/geisler25a/geisler25a.pdf)

### Associated with
- **Honesty** (constructs)
  > In this paper, we argue for the importance of alignment for honesty, ensuring that LLMs proactively refuse to answer questions when they lack knowledge, while still not being overly conservative. (Abstract)
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Human preference alignment** (constructs)
  > “The ideal models are supposed to refuse to answer questions that violate human values and meanwhile provide appropriate justifications for rejection.”
  - [Large Language Models as Automated Aligners for  benchmarking  Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d591ef4c631b33ac4e08dd88f1ee1dff-Paper-Conference.pdf)
- **Harmlessness** (constructs)
  > ...a model that refuses to answer, while technically considered harmless, renders the response quite unhelpful [16].
  - [Stepwise Alignment for Constrained Language Model Policy Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/bcfcf7232cb74e1ef82d751880ff835b-Paper-Conference.pdf)
- **Preference bias** (constructs)
  > In this task, we expect the model to refuse to give responses that may imply its preference towards any topic, so we use Refusal Rate (RR) as the metric.
  - [Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cb5b3d64bdf3c6642c8d9a8fbecd019-Paper-Conference.pdf)
- **Safety** (constructs)
  > These insights highlight that LLM safety relies on maximizing the probability of generating rejection tokens in response to harmful queries. (Section 2)
  - [On the Role of Attention Heads in Large Language Model Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/d0bcff6425bbf850ec87d5327a965db9-Paper-Conference.pdf)
- **Safe response generation** (behaviors tasks)
  > I am sorry, but I cannot fulfill your request… is used as a safe response under the good bot goal, indicating refusal to generate harmful content. (Figure 1 and Section 4.2)
  - [Goal-Conditioned DPO: Prioritizing Safety in Misaligned Instructions](https://aclanthology.org/2025.naacl-long.369.pdf)
- **Hallucination detection** (behaviors tasks)
  > The hallucination detection task aims to test the model’s ability to decline answering questions that are not mentioned in the given context.
  - [LaRA: Benchmarking Retrieval-Augmented Generation and Long-Context LLMs – No Silver Bullet for LC or RAG Routing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dv/li25dv.pdf)
- **Databricks Dolly-15k** (measurements)
  > For AutoPoison-refusal, we first generate poisoned datasets by replacing the generation targets in GPT-4-LLM and Databricks-Dolly-15k with two refusal outputs... (Section A.1)
  - [LT-Defense: Searching-free Backdoor Defense via Exploiting the Long-tailed Effect](https://proceedings.neurips.cc/paper_files/paper/2024/file/064f6bcd7d3c72fb187bfca35ba2bfd4-Paper-Conference.pdf)
- **Alpaca instruction dataset** (measurements)
  > “For the refusal behavior vector, we randomly select 100 instructions from the Alpaca dataset ... and append them with 100 typical refusal or compliance behavior prefixes as responses”
  - [Programming Refusal with Conditional Activation Steering](https://proceedings.iclr.cc/paper_files/paper/2025/file/e2dd53601de57c773343a7cdf09fae1c-Paper-Conference.pdf)
