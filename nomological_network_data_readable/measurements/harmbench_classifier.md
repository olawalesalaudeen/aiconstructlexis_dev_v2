# HarmBench classifier
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** HarmBench Classifier, HarmBench evaluator, HarmBench judge, HarmBench-Llama2-13B-Chat  

## State of the Field

**What it is.** Across papers, the prevailing usage treats the HarmBench classifier as an LLM-based safety judge for model responses. Definitions variously call it a classifier, evaluator, or judge, but they converge on assessing whether outputs are harmful or unsafe, including whether a response to a harmful instruction matches malicious intent and counts as a successful jailbreak. One description calls it "the official HarmBench classifier of model response harmfulness" and says it is fine-tuned from Llama-2-13B, while another names the variant HarmBench-Llama2-13B-Chat and uses it to label responses as harmless or harmful.

**What it is claimed to measure.** Measurement claims are narrow rather than spread across many targets: papers link it to 1 construct, Harmlessness, and 1 behavioral indicator, Harmful content generation. Papers use it to measure harmful content generation when computing attack success rate, and they also report percentage of harmless responses based on the HarmBench-Llama2-13B-Chat classifier. Across these uses, the recorded framing is response safety, either as harmfulness or harmlessness.

**Space of uses.** Papers position it both as the evaluator used for HarmBench results and as a baseline safety evaluator in meta-evaluation. One study says "for results on HarmBench we use the LLM-based HarmBench evaluator", while another groups the HarmBench Classifier with Llama-Guard-2-8B, MD-Judge, and WildGuard as evaluators used in safety benchmarks. No measurement instrument is linked to it in the recorded relationships, and one paper describes the judge as "Judge(Target(P), I) -> {0, 1}", deployed because of "high alignment with human evaluations".

## Sources

**[Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)**
> An LLM-as-a-judge safety classifier fine-tuned to assess whether model outputs are harmful.

**[SORRY-Bench: Systematically Evaluating Large Language Model Safety Refusal](https://proceedings.iclr.cc/paper_files/paper/2025/file/9622163c87b67fd5a4a0ec3247cf356e-Paper-Conference.pdf) (as "HarmBench Classifier")**
> A specific classifier from the HarmBench benchmark, used as a baseline safety evaluator in the meta-evaluation.

**[AdvPrompter: Fast Adaptive Adversarial Prompting for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/paulus25a/paulus25a.pdf) (as "HarmBench evaluator")**
> LLM-based evaluation system used to determine if a model's response to a harmful instruction is unsafe, serving as a judge for attack success on the HarmBench dataset.

**[Adversarial Reasoning at Jailbreaking Time](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sabbaghi25a/sabbaghi25a.pdf) (as "HarmBench judge")**
> A judge model/protocol from HarmBench that determines whether a target response matches the malicious intent and counts as a successful jailbreak.

**[Bi-Factorial Preference Optimization: Balancing Safety-Helpfulness in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad77a15531fbccefa8be5e434b4b7908-Paper-Conference.pdf) (as "HarmBench-Llama2-13B-Chat")**
> A classifier used to judge whether generated responses are harmless or contain harmful content.

## Relationships

### → HarmBench classifier
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > To compute attack success rate, we use three LLM-as-a-judge models that are fine-tuned to assess output safety: the official HarmBench classifier... (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > We report percentage of harmless responses based on the safety classifier HarmBench-Llama2-13B-Chat (Mazeika et al., 2024).
  - [Bi-Factorial Preference Optimization: Balancing Safety-Helpfulness in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad77a15531fbccefa8be5e434b4b7908-Paper-Conference.pdf)
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > “we report the attack success rate (ASR) using HarmBench’s judge”
  - [REINFORCE Adversarial Attacks on Large Language Models: An Adaptive, Distributional, and Semantic Objective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/geisler25a/geisler25a.pdf)
