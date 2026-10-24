# SlimPajama
**Type:** Measurement  
**Referenced in:** 26 papers  
**Also known as:** Slimpajama  

## State of the Field

**What it is.** Across the papers, SlimPajama is most commonly treated as a large-scale text corpus or pre-training dataset. Several definitions present it simply as the corpus from which files are selected or as the data source for language-model pretraining, while some papers describe it more specifically as a cleaned and deduplicated version of RedPajama and a high-quality corpus with diverse sources such as C4, ArXiv, GitHub, and Books. A smaller line of work foregrounds subsets within it, either by selecting categories such as StackExchange, Github Codes, ArXiv, and Book, or by drawing token subsets for experiments.

**What it is claimed to measure.** Papers do not report SlimPajama as measuring any construct or behavioral indicator. The available descriptions instead use it as experimental data for training, post-training, pruning recovery, and related model-development procedures.

**Space of uses.** Most papers position SlimPajama as a training or continued-training corpus rather than a standalone evaluation protocol. Papers use it for file selection, post-prune recovery, continual pre-training after architectural changes, post-training after pruning, general language-model training, and finetuning; one study also samples topic-specific categories from it to simulate collaboration among users with different preferences. No other measurement instrument is linked to it.

## Sources

**[Combatting Dimensional Collapse in LLM Pre-Training Data via Submodular File Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/136729ae4b0fee25a0d28077442506da-Paper-Conference.pdf)**
> A large text corpus used as the pre-training data source from which files are selected.

**[Beware of Calibration Data for Pruning Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ede933e10afa991a10b6f36b6522129-Paper-Conference.pdf) (as "Slimpajama")**
> A cleaned and deduplicated version of the RedPajama dataset, serving as a high-quality pre-training corpus with diverse sources.

## Relationships

### → SlimPajama
- **Language modeling** (behaviors tasks) — *measured_by*
  > We perform moderate-scale language modeling experiments with 1.3B and 2.7B parameters on Slimpajama corpus [79] for 100B tokens each. (Section 4.1)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **Language model pre-training** (behaviors tasks) — *measured_by*
  > Experiments were conducted on two datasets: the well-known C4 dataset (Raffel et al., 2020) and a cleaner high-quality dataset, SlimPajama (Soboleva et al., 2023).
  - [SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a70ad3d9c704fb9b81b5c69eda722dc-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > “fine-tuning LLaMA-2 (Touvron et al., 2023) and LLaMA-3.1 (Dubey et al., 2024) on continuous pretraining task SlimPajama (Soboleva et al., 2023)”
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
