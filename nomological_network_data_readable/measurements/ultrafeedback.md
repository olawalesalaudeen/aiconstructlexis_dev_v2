# UltraFeedback
**Type:** Measurement  
**Referenced in:** 66 papers  
**Also known as:** Ultrafeedback, Ultra-Feedback  

## State of the Field

**What it is.** Across papers, UltraFeedback is most commonly described as a high-quality instruction or preference dataset built from scored candidate responses and used for instruction tuning, reward-model training, and evaluation of aligned language models. Several papers also treat it as a public benchmark for generative judges on preference prediction, while smaller uses describe it as a prompt set for best-of-n experiments or as material for additional fine-grained text generation. Its content is variously described as instruction-response pairs, prompts, or candidate responses with GPT-4 preference annotations or scores, often across instruction-following, truthfulness, honesty, and helpfulness; some papers refer to UltraFeedback3, a development set of 1K instructions, or only the first 3,000 prompts.

**What it is claimed to measure.** Papers link UltraFeedback to 7 constructs and 2 behavioral indicators. It is most often used to measure helpfulness, and is also used for instruction following, honesty, and instruction following ability, with smaller lines of work using it to measure truthfulness, human preference alignment, generalization, and dialogue generation. These claims mostly converge on the same objectives papers describe inside the dataset itself, especially instruction-following, honest, truthful, and helpful objectives.

**Space of uses.** Papers use UltraFeedback as a training set for instruction tuning or preference learning, as a benchmark for preference prediction or alignment evaluation, and as a development set for choosing hyperparameters. In experiments it appears alongside AlpacaEval 2.0, Anthropic HH, RewardBench, Beavertails, and Orca-DPO, among others, though papers do not claim any direct relationship between UltraFeedback and another measurement instrument. One paper also claims a causal relationship from UltraFeedback to critique ability, citing results where critique-tuned models fine-tuned from critique datasets outperform a larger chat model.

## Sources

**[ReFT: Representation Finetuning for Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/75008a0fba53bf13b0bb3b7bff986e0e-Paper-Conference.pdf) (as "Ultrafeedback")**
> A high-quality instruction dataset built from scored candidate responses and used for instruction tuning.

**[Learning LLM-as-a-Judge for Preference Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/09fd990b19b2e69cc4d20e9969e43f09-Paper-Conference.pdf)**
> A public benchmark used to evaluate generative judges on preference prediction.

**[Towards Cost-Effective Reward Guided Text Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/rashid25a/rashid25a.pdf) (as "Ultra-Feedback")**
> Ultra-Feedback dataset used for additional fine-grained text generation experiments.

## Relationships

### → UltraFeedback
- **Helpfulness** (constructs) — *measured_by*
  > UltraFeedback [7]: a multi-aspect alignment dataset with 64K prompts with preferences obtained from GPT-4, including "Instruction following", "Honest", "Truthful", and "Helpful" objectives (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > UltraFeedback [7]: a multi-aspect alignment dataset with 64K prompts with preferences obtained from GPT-4, including "Instruction following", "Honest", "Truthful", and "Helpful" objectives (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **Honesty** (constructs) — *measured_by*
  > UltraFeedback [7]: a multi-aspect alignment dataset with 64K prompts with preferences obtained from GPT-4, including "Instruction following", "Honest", "Truthful", and "Helpful" objectives (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > we evaluate DISTILLM-2 for general purpose instruction-following task on AlpacaEval (Li et al., 2023), Evol-Instruct (Xu et al., 2024a), and UltraFeedback (Cui et al., 2024).
  - [DistiLLM-2: A Contrastive Approach Boosts the Distillation of LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ko25a/ko25a.pdf)
- **Truthfulness** (constructs) — *measured_by*
  > UltraFeedback [7]: a multi-aspect alignment dataset with 64K prompts with preferences obtained from GPT-4, including "Instruction following", "Honest", "Truthful", and "Helpful" objectives (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **Reward modeling ability** (constructs) — *measured_by*
  > The results of reward modeling on the HH-RLHF, Ultrafeedback, Summarize, and Stack-overflow. (Table 1 caption)
  - [SELF-EVOLVED REWARD LEARNING FOR LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f5a4e26c13d1e0a47f46790c999361-Paper-Conference.pdf)
- **Dialogue generation** (behaviors tasks) — *measured_by*
  > We further conduct experiments on tasks such as conditional generation (IMDB) and dialogue (Anthropic HH, UltraFeedback). (Section 5)
  - [MallowsPO: Fine-Tune Your LLM with Preference Dispersions](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ddab70bf41ffe5d423840644d3357f4-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > In this section, we will evaluate our model, previously trained on the C4 dataset, on various other datasets, including Anthropic HH-RLHF (HH), Synthetic instruction2(Instruct), PKU SafeRLHF (PKU), Reward3, UltraFeedback(UltraF), FineWeb (Penedo et al., 2024) and Pile uncopyrighted(Pile)4 datasets. (Section 4.4)
  - [Robust Multi-bit Text Watermark with LLM-based Paraphrasers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25k/xu25k.pdf)
