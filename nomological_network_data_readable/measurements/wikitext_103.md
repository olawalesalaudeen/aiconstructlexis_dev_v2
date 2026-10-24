# WikiText-103
**Type:** Measurement  
**Referenced in:** 61 papers  
**Also known as:** Wikitext-103, WIKITEXT-103, Wikitext103, WIKITEXT103, WikiText103, wikitext-103-v1  

## State of the Field

**What it is.** Most definitions treat WikiText-103 as a large language modeling benchmark, corpus, or dataset derived from high-quality Wikipedia articles, often explicitly as a larger version of WikiText and used for autoregressive language modeling, perplexity, or next-token prediction. Papers also describe named variants and subsets, including Wikitext-103-v1, train, validation, and test splits, held-out or test sets, and sampled validation sequences. A smaller line of use treats it as source text for character strings, split-word manipulations, or embedding generation.

**What it is claimed to measure.** Papers link it to 2 constructs and 4 behavioral indicators. The prevailing construct-level use is to measure Language modeling ability, with Long-context understanding also reported through next-token generation on Wikitext-103. At the behavioral level, papers use it to measure Conditional text generation, Text continuation, Text generation, and Text infilling, so the claimed measurement role is spread across several related generation behaviors.

**Space of uses.** The prevailing usage is as a standard or commonly used language modeling benchmark, often with perplexity or next-token prediction as the reported evaluation, and several papers also train or pre-train models on it from scratch. Papers often use it alongside WikiText-2, and some pair it with PTB, LAMBADA, OPENWEBTEXT, or GAP Corpus; no measurement instrument is linked to it. A smaller line of work uses its text as prompts for continuation, as a source of character strings, or for manipulating single-token words while analyzing attention patterns.

## Sources

**[A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)**
> A larger version of the WikiText benchmark, derived from high-quality Wikipedia articles for language modeling evaluation.

**[Language Model Decoding as Direct Metrics Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/7416573f05b50beac6d0aef3abc805c0-Paper-Conference.pdf) (as "Wikitext-103")**
> A large-scale language modeling corpus derived from high-quality Wikipedia articles, used here as an evaluation domain for open-ended text generation.

**[Efficient Perplexity Bound and Ratio Matching in Discrete Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/23e6f78bdec844a9f7b6c957de2aae91-Paper-Conference.pdf) (as "Wikitext103")**
> A larger version of the Wikitext dataset, derived from Wikipedia articles and used for evaluating language model perplexity.

**[Neural ODE Transformers: Analyzing Internal Dynamics and Adaptive Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/82e3509393670d9d478c359b4ce6f950-Paper-Conference.pdf) (as "WIKITEXT103")**
> A benchmark dataset derived from high-quality Wikipedia articles, used for evaluating language modeling performance.

**[Your Absorbing Discrete Diffusion Secretly Models the Conditional Distributions of Clean Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/a365e37c18fb91af547a2f0012a89e98-Paper-Conference.pdf) (as "WikiText103")**
> A larger language modeling benchmark used to evaluate zero-shot text likelihood on a held-out corpus.

**[From Tokens to Words: On the Inner Lexicon of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aef75887979ae1287b5deb54a1e3cbda-Paper-Conference.pdf) (as "WIKITEXT-103")**
> A large English language modeling dataset used to source text for experiments on splitting single-token words and analyzing attention patterns.

**[From Language Models over Tokens to Language Models over Characters](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vieira25a/vieira25a.pdf) (as "wikitext-103-v1")**
> A large language modeling corpus derived from high-quality Wikipedia articles, used in this paper as a source of character strings for evaluating model performance.

## Relationships

### → WikiText-103
- **Language modeling** (behaviors tasks) — *measured_by*
  > training Transformer models with linear attention with the goal of matching standard Transformer performance, e.g., as tested on benchmarks such as Long Range Arena (LRA) classification (Tay et al., 2021) and WikiText-103 language modeling (Merity et al., 2017).
  - [The Hedgehog & the Porcupine: Expressive Linear Attentions with Softmax Mimicry](https://proceedings.iclr.cc/paper_files/paper/2024/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)
- **Autoregressive language modeling** (behaviors tasks) — *measured_by*
  > We evaluate our model DIFFEQFORMER, in comparison to baselines on both OPENWEBTEXT (Gokaslan et al., 2019) and WIKITEXT103 (Merity et al., 2016) for the autoregressive modeling task. (Section 6.1)
  - [Neural ODE Transformers: Analyzing Internal Dynamics and Adaptive Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/82e3509393670d9d478c359b4ce6f950-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > WikiText-2 and WikiText-103 (Merity et al., 2016) are two commonly used language modeling benchmarks consisting of high-quality Wikipedia articles. (Section 4.1.1)
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **Text continuation** (behaviors tasks) — *measured_by*
  > WikiText-103 (Merity et al., 2017) is a standard benchmark for language modeling... (Section 4.1, Text completion)
  - [Nearest Neighbor Speculative Decoding for LLM Generation and Attribution](https://proceedings.neurips.cc/paper_files/paper/2024/file/93c099bb4cde51b724eaa6d6d4a4b5e4-Paper-Conference.pdf)
- **Language model pre-training** (behaviors tasks) — *measured_by*
  > For LLM pertaining, we report the perplexity on Wikitext 103 (Merity et al., 2016), C4 (Raffel et al., 2020), and Pile (Gao et al., 2020) (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Text infilling** (behaviors tasks) — *measured_by*
  > Evaluation of text infilling performance using the MAUVE score (↑) with 5 prompt masks... For all methods, we use the same set of 2,000 text sequences from the validation set of WikiText-103
  - [Discrete Copula Diffusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/dd1fef536655685898a6602bfbf16857-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > "For the latter, we follow (Tong et al., 2023) to use Wikitext-103-v1, a large-scale dataset derived from Wikipedia articles for language modeling tasks."
  - [Cape: Context-Aware Prompt Perturbation Mechanism with Differential Privacy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25g/wu25g.pdf)
