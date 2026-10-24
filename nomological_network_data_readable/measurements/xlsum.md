# XLSum
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** XLSUM, XL-Sum  

## State of the Field

**What it is.** Across the surveyed work, XLSum is most commonly described as a large-scale multilingual summarization dataset or benchmark, usually for abstractive summarization and sometimes explicitly for news or cross-lingual summarization. Most descriptions say it covers 44 languages, though one paper describes 45 languages; papers also characterize it as created from BBC articles, as comprising professionally annotated article-summary pairs, and as evaluating generation through a one-sentence summary of a context or article. A smaller line of work uses only the English subset or portion, and one paper describes that subset as the largest publicly available summarization dataset, with 307,000 training samples and 11,500 test samples.

**What it is claimed to measure.** Papers use XLSum to measure 3 behavioral indicators and no constructs. The prevailing use is for Text summarization, with additional use for Abstractive summarization and, less often, News summarization. All recorded measurement claims stay within summarization tasks.

**Space of uses.** No measurement instrument is linked to it. Papers commonly place it in multilingual or generation benchmark suites, and one study selects the text summarization task with XLSum as the reference task for evaluating multilingual performance. Usage varies from fine-tuning and evaluation on the English subset, to work on 6 languages with GPT-4 as a judge, to random sampling from the test set; some papers also mention it alongside XSum for transfer setups or alongside XNLI in mixed evaluations.

## Sources

**[Vector-ICL: In-context Learning with Continuous Vector Representations](https://proceedings.iclr.cc/paper_files/paper/2025/file/46516c4204d6cab8299e55d4ebf7ccec-Paper-Conference.pdf)**
> A summarization dataset used to evaluate text summarization from projected embeddings.

**[Beyond Model Collapse: Scaling Up with Synthesized Data Requires Verification](https://proceedings.iclr.cc/paper_files/paper/2025/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf) (as "XLSUM")**
> A large, publicly available multilingual dataset for news summarization, used in this work for its English subset to fine-tune and evaluate Llama models.

**[Drop-Upcycling: Training Sparse Mixture of Experts with Partial Re-initialization](https://proceedings.iclr.cc/paper_files/paper/2025/file/d24b7366d714b09a977946ef0d9bf3ad-Paper-Conference.pdf) (as "XL-Sum")**
> Cross-lingual summarization benchmark evaluating the model's ability to condense text.

## Relationships

### → XLSum
- **Text summarization** (behaviors tasks) — *measured_by*
  > We select the text summarization task with the XLSum (Hasan et al., 2021) dataset as the reference task to evaluate multilingual performance as it requires the model to comprehend the input text and generate a coherent fragment. (Section 2.3)
  - [How do Large Language Models Handle Multilingualism?](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bd359b32ab8b2a6bbafa1ed2856cf40-Paper-Conference.pdf)
- **Abstractive summarization** (behaviors tasks) — *measured_by*
  > summarization using XSum [42] and XLSum [19] (Introduction).
  - [Many-Shot In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **News summarization** (behaviors tasks) — *measured_by*
  > We utilize the English summarization subset of the XLSUM dataset (Hasan et al., 2021)
  - [Beyond Model Collapse: Scaling Up with Synthesized Data Requires Verification](https://proceedings.iclr.cc/paper_files/paper/2025/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf)
