# AdvBench
**Type:** Measurement  
**Referenced in:** 120 papers  
**Also known as:** Advbench, ADVBENCH  

## State of the Field

**What it is.** Across the papers, AdvBench is most commonly treated as an adversarial or jailbreak benchmark of harmful instructions, prompts, behaviors, objectives, or queries, used to test whether models produce harmful responses. The prevailing description is a text benchmark with about 500 items, often stated as 500 harmful instructions or malicious prompts, though some papers describe 520 harmful behaviors or queries, one paper describes 521 lines of harmful behaviors plus 575 lines of harmful strings, and several studies use a refined or curated 50-item version or smaller subsets. Some definitions also describe topical coverage, including crimes, self-harm, defamation, weapons, misinformation, hate speech, cybercrime, financial crime, terrorism, and fraud.

**What it is claimed to measure.** Papers use AdvBench to measure 7 constructs and 6 behavioral indicators. The most common construct framings are Safety alignment, Safety, Harmlessness, Adversarial robustness, and Robustness, plus 2 other constructs, and papers also use it to measure Jailbreaking, Harmful content generation, Harmful content detection, Harmful request refusal, and Jailbreak resistance, plus 1 other behavioral indicator. The stated links spread across closely related safety, refusal, robustness, and jailbreak framings: papers describe safety with jailbreak rate or refusal rate, evaluate attack success on harmful prompts, and use the benchmark for harmfulness detection.

**Space of uses.** No paper states a formal relation from AdvBench to another measurement instrument. In use, papers present it as a commonly used benchmark for attack, defense, and safety evaluation, and they often pair it with HarmBench, MaliciousInstruct, HEx-PHI, JailbreakBench, and SafeBench, plus several other benchmarks. Papers use it both as a main benchmark and as an out-of-domain or auxiliary check, and they work with the full benchmark or subsets such as the harmful behaviors split, a curated 50-item version, 100 sampled instructions, or all 520 queries.

## Sources

**[Catastrophic Jailbreak of Open-source LLMs via Exploiting Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/3af25aa3de8b7b02ddbd1b6be5031be8-Paper-Conference.pdf)**
> A benchmark dataset comprising 500 instances of harmful behaviors expressed as specific instructions, used to evaluate model jailbreak vulnerabilities.

**[Adversarial Representation Engineering: A General Model Editing Framework for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4630f7c0660d944c132455c124e7d90-Paper-Conference.pdf) (as "Advbench")**
> A dataset containing malicious prompts designed to test the alignment and safety of LLMs by attempting to induce harmful responses.

**[Stronger Universal and Transferable Attacks by Suppressing Refusals](https://aclanthology.org/2025.naacl-long.302.pdf) (as "ADVBENCH")**
> A benchmark dataset containing 50 harmful behaviors used to evaluate the effectiveness of jailbreak attacks on LLMs.

## Relationships

### → AdvBench
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > In this scenario, we utilize the widely used benchmark dataset, AdvBench[46], to evaluate the steering effectiveness on facilitating jailbreaking... (Section 4.1)
  - [Personalized Steering of Large Language Models: Versatile Steering Vectors Through Bi-directional Preference Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/58cbe393b4254da8966780a40d023c0b-Paper-Conference.pdf)
- **Safety alignment** (constructs) — *measured_by*
  > we test safety on the “harmful behaviors” subset of the AdvBench benchmark curated by Zou et al. [2023] (Section 2)
  - [Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)
- **Safety** (constructs) — *measured_by*
  > Also, we wonder if weakening model’s exaggerated safety will also lead to a drop in its overall safety, hence we conducted another experiment on AdvBench (Zou et al. [2023b]), which contains 500 harmful instructions. (Section 4.2)
  - [Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cb5b3d64bdf3c6642c8d9a8fbecd019-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > "we red-team LLaMA2-7B-chat using three attack levels and evaluated on Advbench [10]."
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > For our prompts, we sample 100 instructions from AdvBench (Zou et al., 2023). We say that the model output reflects the ANSWER task if it attempts to answer the question... (Section 4.3)
  - [Understanding Catastrophic Forgetting in Language Models via Implicit Inference](https://proceedings.iclr.cc/paper_files/paper/2024/file/692ae28fda9bfbde7c01b13bf5a03395-Paper-Conference.pdf)
- **Adversarial robustness** (constructs) — *measured_by*
  > For robustness evaluations, we take harmful requests from two harmful instruction datasets: HarmBench (Mazeika et al., 2024) and AdvBench (Zou et al., 2023b). (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **Safety robustness** (constructs) — *measured_by*
  > We performed experiments on the Advbench dataset [70] which is one of the most prevailing benchmark datasets to measure the security of LLMs. (Section 4)
  - [Fight Back Against Jailbreaking via Prompt Adversarial Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/759ca99a82e2a9137c6bef4811c8d378-Paper-Conference.pdf)
- **Jailbreak resistance** (behaviors tasks) — *measured_by*
  > Results in Table 5 show that TAIA significantly reduces the attack success rate after tuning on three levels of red-teaming data... evaluated on Advbench [10].
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **Harmful request refusal** (behaviors tasks) — *measured_by*
  > “we evaluate on the first 80 prompts of AdvBench [51] ‘Harmful Behaviors’ split (Adv 80) with ASR as the safety metric.”
  - [Navigating the Safety Landscape: Measuring Risks in Finetuning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ada93fa6643735f294be51dc31eebbd4-Paper-Conference.pdf)
- **Harmful content detection** (behaviors tasks) — *measured_by*
  > (1) Harmfulness Detection (AdvBench): classify prompts as “harmful” or “safe” (Section 4.6)
  - [Can an Individual Manipulate the Collective Decisions of Multi-Agents?](https://aclanthology.org/2025.emnlp-main.611.pdf)
- **Alignment** (constructs) — *measured_by*
  > We evaluate alignment effectiveness using three benchmarks: ... and (3) AdvBench
  - [RMB: Comprehensively benchmarking reward models in LLM alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/427f20d90386fd27804f1831d6a3d48f-Paper-Conference.pdf)
- **Refusal** (behaviors tasks) — *measured_by*
  > on a set of 520 high-risk queries from AdvBench (Zou et al., 2023), all 9 LRMs models... consistently exhibited a significant drop in overall refusal rate under first-person prompting (Section 3.1)
  - [Path Drift in Large Reasoning Models: How First-Person Commitments Override Safety](https://aclanthology.org/2025.emnlp-main.990.pdf)
