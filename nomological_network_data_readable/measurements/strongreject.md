# StrongREJECT
**Type:** Measurement  
**Referenced in:** 21 papers  
**Also known as:** StrongReject, STRONG REJECT  

## State of the Field

**What it is.** Across papers, StrongREJECT is most commonly treated as a safety or jailbreak evaluation benchmark built around harmful or forbidden prompts and a way to score model responses. Descriptions vary: some papers present an open-source dataset of manually constructed, realistic malicious instructions, sometimes tied to prohibited-use policies and sometimes used as a 60-prompt, six-category subset or small dataset; others describe a dataset plus scoring system, or a judge model, including a Gemma-2B safety classifier and a GPT-4o-mini based evaluator that score refusal, effectiveness, or harmfulness. A smaller line of work frames it specifically as text-generation evaluation for whether models reject unsafe requests under adversarial or jailbreak conditions.

**What it is claimed to measure.** Papers link StrongREJECT to 3 constructs and 2 behavioral indicators. The prevailing use is to measure harmlessness and safety: papers use StrongREJECT scores or harmful-prompt evaluation to quantify response harmfulness, safety violation, or refusal of harmful requests. One paper also says the evaluator measures both willingness and capabilities, linking it to general ability. On behavioral indicators, it is most often used to measure harmful content generation and refusal, including attack success rates, refusal rates, and harmfulness scores, so its measurement claims are spread across several safety-related outcomes rather than centered on a single one.

**Space of uses.** Across papers, StrongREJECT is usually used as a benchmark in broader safety or jailbreak evaluations, often alongside AdvBench, JBB-Behaviors, do-not-answer, WildJailbreak, and HH-RLHF. Some authors use it directly as the harmful-prompt test set, sometimes on a 60-sample subset or against the top 10% of jailbreak techniques per prompt, while others use its evaluator or classifier to produce SR scores, SR ASR, average safety scores, or refusal judgments. A smaller use treats its toxic samples as source material for safety fine-tuning or for generating harmful examples through jailbreak methods.

## Sources

**[Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf) (as "StrongReject")**
> A safety classifier model based on Gemma-2B, used as an LLM-as-a-judge to evaluate the harmfulness of model responses.

**[Backtracking Improves Generation Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/65beb73449888fabcf601b3a3ef4b3a7-Paper-Conference.pdf)**
> An open-source safety evaluation dataset (SR) used to assess a model's safety violation rate.

**[The Hidden Dimensions of LLM Alignment: A Multi-Dimensional Analysis of Orthogonal Safety Directions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pan25f/pan25f.pdf) (as "STRONG REJECT")**
> A dataset and scoring system used to provide toxic sample prompts for safety fine-tuning and to quantify the harmfulness of model responses during evaluation.

## Relationships

### → StrongREJECT
- **Harmlessness** (constructs) — *measured_by*
  > while quantifying response harmfulness using STRONG REJECT scores (Souly et al., 2024).
  - [The Hidden Dimensions of LLM Alignment: A Multi-Dimensional Analysis of Orthogonal Safety Directions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pan25f/pan25f.pdf)
- **Safety** (constructs) — *measured_by*
  > For evaluating safety, we use do-not-answer (DNA) (Wang et al., 2023) and StrongReject (Souly et al., 2024) datasets. (Section 3)
  - [Exploring Safety-Utility Trade-Offs in Personalized Language Models](https://aclanthology.org/2025.naacl-long.565.pdf)
- **Attack effectiveness** (constructs) — *measured_by*
  > "We suggest this problem arises because jailbreak researchers lack a standard, high-quality benchmark for evaluating jailbreak performance" and "We introduce the StrongREJECT benchmark to address these issues."
  - [A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf)
- **General ability** (constructs) — *measured_by*
  > "Therefore, the StrongREJECT evaluator measures both of these dimensions: willingness and capabilities."
  - [A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > To compute attack success rate, we use three LLM-as-a-judge models that are fine-tuned to assess output safety: ... and the Gemma-2B version of the StrongReject safety classifier (Souly et al., 2024). (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **Refusal** (behaviors tasks) — *measured_by*
  > For generation, we use data from the StrongREJECT task (Souly et al., 2024). In particular, we measure the refusal rate of the model on harmful prompts, with the attack considered to have succeeded if a GPT-4o judge (gpt-4o-2024-05-13) considers the model to have answered the question. (Section 3)
  - [Scaling Trends in Language Model Robustness](https://raw.githubusercontent.com/mlresearch/v267/main/assets/howe25a/howe25a.pdf)
