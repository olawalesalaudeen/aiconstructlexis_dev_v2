# AG News
**Type:** Measurement  
**Referenced in:** 61 papers  
**Also known as:** AG-News, AGNews, AGNEWS, AGnews, AgNews, AG's News, AG News Corpus, AG’s News  

## State of the Field

**What it is.** Across the surveyed work, the prevailing description is a benchmark or corpus for news topic classification, usually framed as assigning news articles to the categories World, Sports, Business, and Sci/Tech. Definitions vary in detail: some describe short news articles, some a collection from diverse domains, one describes article titles and descriptions and uses AG News Title and Description (AGT and AGD), and others present it more generally as a balanced multi-class text classification benchmark.

**What it is claimed to measure.** Papers use AG News to measure eight constructs and three behavioral indicators. The most common behavioral uses are text classification, downstream task performance, and news categorization; among constructs, it is most frequently linked to zero-shot generalization, adaptability, adversarial robustness, calibration, and general ability, plus generalization, in-context learning, and language modeling ability. Overall, papers use it for both task-level classification behavior and a broad spread of model properties rather than only one construct.

**Space of uses.** The prevailing use is as one benchmark within multi-dataset evaluation suites, especially for classification, and papers often pair it with SST-2; it also appears alongside StrategyQA, IMDb, DBpedia, and GSM8K, among other datasets. Smaller lines of work position it as an unseen or out-of-domain dataset for zero-shot evaluation, as a user fine-tuning task, as a general NLP training task, and as a testbed for backdoor attacks, defenses, privacy-preserving classification, and few-shot or in-context learning. No measurement instrument is linked to it.

## Sources

**[Out-of-Distribution Detection by Leveraging Between-Layer Transformation Smoothness](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a2f65c9d2313b71005e600bd23393fe-Paper-Conference.pdf) (as "AG-News")**
> A topic classification dataset (AGN) constructed from news articles, categorized into four classes.

**[EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)**
> The AG News dataset, a benchmark for topic classification of news articles into four categories.

**[Revisiting In-context Learning Inference Circuit in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/22d4f952efa13970f0b1ffb22170d416-Paper-Conference.pdf) (as "AGNews")**
> The AG News dataset, a topic classification benchmark with four categories of news articles.

**[Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf) (as "AGNEWS")**
> The AG News (AGNEWS) corpus is a benchmark dataset for topic classification of news articles, used here as a user fine-tuning task.

**[Concept Bottleneck Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/de4ce91dfe56b919ee1c228d6a78f866-Paper-Conference.pdf) (as "AGnews")**
> A news topic classification benchmark used to evaluate text classification and generation settings in the paper.

**[OCEAN: Offline Chain-of-thought Evaluation and Alignment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e9dbfc971b5f8e74f41e335ff3d658-Paper-Conference.pdf) (as "AgNews")**
> A topic classification benchmark used in the paper's in-context learning and instruction-tuning analysis.

**[Certifying Language Model Robustness with Fuzzed Randomized Smoothing: An Efficient Defense Against Backdoor Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf) (as "AG's News")**
> A topic classification benchmark used to evaluate model behavior on news-topic categorization.

**[Active Few-Shot Learning for Text Classification](https://aclanthology.org/2025.naacl-long.340.pdf) (as "AG News Corpus")**
> News topic classification benchmark containing news articles across four categories, used to assess few-shot performance on balanced multi-class text classification.

**[ICLShield: Exploring and Mitigating In-Context Learning Backdoor Attacks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ren25b/ren25b.pdf) (as "AG’s News")**
> Text classification dataset used to evaluate news topic classification under backdoor attacks and defenses.

## Relationships

### → AG News
- **Text classification** (behaviors tasks) — *measured_by*
  > SST-2 (Socher et al., 2013) and AGNews (Zhang et al., 2015) are text classification tasks with different class numbers
  - [BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > We also evaluate the ability of BD3-LMs to generalize to unseen datasets in a zero-shot setting... We evaluate the likelihood of models trained with OWT on datasets... AG News... (Section 6.1)
  - [Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > “For fine-tuning task, we consider SST2(Socher et al., 2013), AGNEWS(Zhang et al., 2015), GSM8K(Cobbe et al., 2021) and AlpacaEval (Li et al., 2023a) as the user fine-tuning task.”
  - [Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > We use 6 English textual corpora from 5 different domains for comprehensive evaluation... (5) AG News (Zhang et al., 2015) is a collection of news articles from diverse domains (Section 4.1.1)
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **News categorization** (behaviors tasks) — *measured_by*
  > instruction: Categorize the news article into one of the 4 categories: World,Sports,Business,Sci/Tech. (Appendix B.1)
  - [Vaccine: Perturbation-aware Alignment for Large Language Models against Harmful Fine-tuning Attack](https://proceedings.neurips.cc/paper_files/paper/2024/file/873c86d9a979ab80d8e2919510d4446b-Paper-Conference.pdf)
- **Adversarial robustness** (constructs) — *measured_by*
  > We conducted our confidence elicitation attacks on Meta-Llama-3-8B-Instruct (Touvron et al., 2023) and Mistral-7B-Instruct-v0.2 (Jiang et al., 2023) while performing classification on two common datasets to evaluate adversarial robustness: SST-2, AG-News and one modern dataset: StrategyQA (Geva et al., 2021). (Section 4)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **Calibration** (constructs) — *measured_by*
  > We first demonstrate that LLama3 is well-calibrated for the SST2, AG-News, and StrategyQA tasks, as illustrated in Table 1 and Figure 3. (Section 5.1)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
