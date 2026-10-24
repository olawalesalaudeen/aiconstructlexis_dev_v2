# Membership inference attack
**Type:** Measurement  
**Referenced in:** 32 papers  
**Also known as:** Membership Inference Attack (MIA), Membership Inference Attack, Membership inference, Dataset membership inference, Membership inference methods, Membership inference attacks  

## State of the Field

**What it is.** Across papers, the prevailing usage treats membership inference attack as an evaluation or auditing procedure for asking whether a specific example was used in a model's training, alignment, or unlearning setting, usually by distinguishing member from non-member examples from model behavior. Some authors narrow this to black-box settings that rely only on output texts or output behavior, without logits or token probabilities, while others describe loss-based variants and heuristics such as loss, perplexity, lowercase probability, zlib compression, and Min-k% probability. A smaller line of work extends the framing from single examples to document-level attacks or to suspect datasets, defining it as detecting whether a suspect dataset was used in training.

**What it is claimed to measure.** Papers use this procedure to measure 3 constructs and 2 behavioral indicators. The most common measurement claims are privacy-focused: papers report that privacy leakage and privacy preservation are measured by membership inference attacks, and one paper describes them as established practice for quantifying privacy. Other papers use them to measure forget quality and knowledge memorization, while pre-training data detection is treated as related to membership inference attack rather than as a direct measurement claim. Overall, the reported targets are spread across several privacy and unlearning constructs rather than concentrated on one.

**Space of uses.** In use, papers often operationalize membership inference attacks in black-box or loss-based form, by querying a model on candidate examples, obtaining losses or outputs, and thresholding a score to infer membership. It is linked to 3 instruments, most often BookMIA, BookTection, and WikiMIA, and papers describe WikiMIA as separating early Wikipedia as member data and recent Wikipedia as non-member data. Papers position the procedure as an empirical privacy audit and as part of unlearning evaluation, and some use it alongside data extraction attacks in broader privacy evaluations.

**Concerns raised.** A few papers note practical limits. One says that previous membership inference benchmarks, including WikiMIA, BookMIA, and BookTection, cannot be reliably used for Llama-3 because the model was trained more recently. Another says that in a black-box setting it can be challenging to infer whether a particular forget sample was observed during training from model outputs alone.

## Sources

**[Differentially Private Steering for Large Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45326c2df19fee16fc1ebc44941fea8e-Paper-Conference.pdf) (as "Membership Inference Attack (MIA)")**
> An evaluation procedure designed to audit empirical privacy by attempting to determine whether a specific data sample was used in the model's alignment or training process.

**[MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)**
> A privacy evaluation procedure that tests whether a datapoint was used in training by distinguishing member from non-member examples.

**[Soft Prompting for Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.204.pdf) (as "Membership Inference Attack")**
> An evaluation procedure designed to determine whether a specific data sample was part of a model's training set by analyzing its output behavior.

**[DocMIA: Document-Level Membership Inference Attacks against DocVQA Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/231a8daf4f64935d0c7c6586f290b24f-Paper-Conference.pdf) (as "Membership inference")**
> The observable phenomenon where a model's outputs or internal states can be analyzed to determine if a specific data point was part of its training set.

**[Unlocking Post-hoc Dataset Inference with Synthetic Data](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25q/zhao25q.pdf) (as "Dataset membership inference")**
> The latent ability of a model or method to determine whether a suspect dataset was used in the training of a target LLM, based on statistical signals extracted from model behavior.

**[PoisonedParrot: Subtle Data Poisoning Attacks to Elicit Copyright-Infringing Content from Large Language Models](https://aclanthology.org/2025.naacl-long.415.pdf) (as "Membership inference methods")**
> Procedures that determine whether a given data point was part of a model’s training set, using heuristics such as perplexity, lowercase probability, zlib compression, and Min-K% probability.

**[OBLIVIATE: Robust and Practical Machine Unlearning for Large Language Models](https://aclanthology.org/2025.emnlp-main.183.pdf) (as "Membership inference attacks")**
> Evaluation procedure that tests whether an attacker can determine if specific data was part of the model's training set, used to assess forget quality.

## Relationships

### → Membership inference attack
- **Privacy preservation** (constructs) — *measured_by*
  > These fully trained prompts, if not properly protected with privacy mechanism, are vulnerable to MIA which aims to infer if an image sample was used for training or not (Section 3.3).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **Privacy leakage** (behaviors tasks) — *measured_by*
  > we develop the first Membership Inference Attack (MIA) for evaluating and auditing the empirical privacy for the problem of LLM steering via activation editing
  - [Differentially Private Steering for Large Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45326c2df19fee16fc1ebc44941fea8e-Paper-Conference.pdf)
- **Knowledge memorization** (constructs) — *measured_by*
  > We adopt four membership inference attack (MIA) methods for knowledge memorization on our collected MIA set. (Introduction)
  - [RWKU: Benchmarking Real-World Knowledge Unlearning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f78dfc9ca0156498241012aec4efa0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Unlearning efficacy** (constructs) — *measured_by*
  > Machine unlearning is typically evaluated by checking if an instance z is a member of the training set (MEMBER) by checking if the loss ℓof the model θupdated is lower than or equal to a threshold τL (Shokri et al., 2017) (Section 3).
  - [Machine Unlearning Fails to Remove Data Poisoning Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/7e810b2c75d69be186cadd2fe3febeab-Paper-Conference.pdf)
- **Forget quality** (constructs) — *measured_by*
  > To determine whether private information still exists in VLMs after unlearning more accurately, we proposed to use MIAs for evaluation. (Section 2.5.3)
  - [Benchmarking Vision Language Model Unlearning via Fictitious Facial Identity Dataset](https://proceedings.iclr.cc/paper_files/paper/2025/file/dafb7f4ced9ac559e077fc611d6e96e5-Paper-Conference.pdf)

### Associated with
- **Pre-training data detection** (behaviors tasks)
  > Pre-training data detection can be considered a special case of Membership Inference Attack (MIA) (Shokri et al., 2017): the goal is to infer whether a given input has been used for training a target LLM
  - [Min-K%++: Improved Baseline for Pre-Training Data Detection from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e3b4132ab2e0b7a21e6e75da7f91a9-Paper-Conference.pdf)
- **Min-K% Prob** (measurements)
  > To accurately measure the privacy leakage, we employ Min-K% Prob (Shi et al., 2024a) , a state-of-the-art MIA method for LMs based on the loss (Section 3.1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **WikiMIA** (measurements)
  > MIA on LLM pre-training texts. We use the WikiMIA benchmark [52], which leverages the Wikipedia timestamp to separate the early Wiki data as the member data, and recent Wiki data as the non-member data (Section 6.3).
  - [Membership Inference Attacks against Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b2c892312af07f8a77afbeed188391f4-Paper-Conference.pdf)
- **BookMIA** (measurements)
  > “Previous membership inference benchmarks such as WikiMIA, BookMIA (Shi et al., 2024), and BookTection (Duarte et al., 2024)”
  - [Infilling Score: A Pretraining Data Detection Algorithm for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5709163243753c9c9ab7f4b4e5a8766d-Paper-Conference.pdf)
- **BookTection** (measurements)
  > “Previous membership inference benchmarks such as WikiMIA, BookMIA (Shi et al., 2024), and BookTection (Duarte et al., 2024)”
  - [Infilling Score: A Pretraining Data Detection Algorithm for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5709163243753c9c9ab7f4b4e5a8766d-Paper-Conference.pdf)
