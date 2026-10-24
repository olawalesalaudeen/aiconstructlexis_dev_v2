# IMDb
**Type:** Measurement  
**Referenced in:** 45 papers  
**Also known as:** IMDB, Imdb, IMDB dataset, IMDb dataset  

## State of the Field

**What it is.** Most papers describe IMDb as a movie-review sentiment benchmark, usually for binary or sentiment classification, with positive and negative labels. Some definitions are narrower, calling it a sentiment-related GRUE dataset or an out-of-distribution target-domain benchmark, while one paper describes movie reviews and ratings used for sentiment analysis and recommendation-system research. Some papers instead use it for controlled generation of positive movie reviews, and one such setup uses a positive and negative sentiment-control subset.

**What it is claimed to measure.** Across papers, IMDb is linked to 4 behavioral indicators and 5 constructs. The prevailing usage is to measure sentiment analysis and text classification: papers present it as a sentiment classification task, a text classification dataset, or a benchmark for binary polarity over movie reviews. A smaller but recurring line of work uses it to measure controlled sentiment generation, and one paper uses it for text generation. Construct claims are more spread out, with papers reporting it as measuring generalization most often, and also adaptability, general ability, in-context learning, and out-of-distribution generalization.

**Space of uses.** Papers often use IMDb alongside benchmarks such as SST-2, AG News, MNLI, BoolQ, and CR, rather than only on its own. Within those benchmark suites it appears as a downstream evaluation task, a target task under domain shift or out-of-distribution evaluation, or a benchmark for standard and adversarial conditions. Some papers instead make it a main testbed for alignment and controlled positive-review generation, while one paper positions it as a secondary real-world benchmark for preference-based evaluation.

## Sources

**[IDEAL: Influence-Driven Selective Annotations Empower In-Context Learners in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a7f90da65dd41d699d00e95700e6fa1e-Paper-Conference.pdf)**
> A sentiment classification benchmark included in the expanded dataset pool for cascade evaluation.

**[Get more for less: Principled Data Selection for Warming Up Fine-Tuning in LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/b36dc39b319ba6ba2a0fd7601951efb4-Paper-Conference.pdf) (as "IMDB")**
> A sentiment-related dataset from GRUE used in the paper's reinforcement finetuning experiments.

**[Capability Localization: Capabilities Can be Localized rather than Individual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/648a5a590ca6f2bb5de53f938e230160-Paper-Conference.pdf) (as "Imdb")**
> A dataset of movie reviews and ratings, widely used for sentiment analysis and recommendation system research.

**[Privately Aligning Language Models with Reinforcement Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/477b39bfb9db99f60914dbfed5f23eb2-Paper-Conference.pdf) (as "IMDb dataset")**
> Sentiment classification benchmark used to evaluate controlled generation of positive movie reviews, serving as a testbed for alignment without human-in-the-loop.

**[RAIN: Your Language Models Can Align Themselves without Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a4699b3d0bf7ba934fe10cdba5a8a32-Paper-Conference.pdf) (as "IMDB dataset")**
> A large movie review dataset used for evaluating controlled text generation, particularly sentiment alignment in generated reviews.

## Relationships

### → IMDb
- **Sentiment analysis** (behaviors tasks) — *measured_by*
  > we run all of our experiments on the IMDB dataset [48] (a sentiment classification task) using a host of language models from different model families (encoder, decoder, encoder-decoder). (Section 5)
  - [Achieving Domain-Independent Certified Robustness via Knowledge Continuity](https://proceedings.neurips.cc/paper_files/paper/2024/file/58cc11cda2a2679e8af5c6317aed0af8-Paper-Conference.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > Table 1: Overview of the tasks, datasets... Task Text Classification Dataset IMDB
  - [Vector-ICL: In-context Learning with Continuous Vector Representations](https://proceedings.iclr.cc/paper_files/paper/2025/file/46516c4204d6cab8299e55d4ebf7ccec-Paper-Conference.pdf)
- **Controlled sentiment generation** (behaviors tasks) — *measured_by*
  > For controlled sentiment generation task, we employ the IMDB dataset (Maas et al., 2011), which is a large movie review dataset. (Section 4)
  - [RAIN: Your Language Models Can Align Themselves without Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a4699b3d0bf7ba934fe10cdba5a8a32-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > We investigate the generalization performance of a host of approximate Bayesian methods... we train a CNN-LSTM model... on the IMDB (Maas et al., 2011)...
  - [Scalable Bayesian Learning with posteriors](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f9f4ff2ebebb298d88e3fe0e10162db-Paper-Conference.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > To test this hypothesis [about generalizability], we conducted an experiment ... under conditions of domain shift. For this experiment, we used three text classification datasets. Specifically, we used IMDB, CR (Ding et al., 2008), and Tweet for sentiment classification. (Section 4.4)
  - [Plug-in and Fine-tuning: Bridging the Gap between Small Language Models and Large Language Models](https://aclanthology.org/2025.acl-long.271.pdf)
- **General ability** (constructs) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
