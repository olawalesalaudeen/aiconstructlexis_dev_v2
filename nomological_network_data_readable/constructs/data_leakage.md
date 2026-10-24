# Data leakage
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Knowledge leakage  

## State of the Field

Across the provided literature, the most common framing of "Data leakage" is the unintentional disclosure of information by a model, though the specific type of information and mechanism of exposure vary. A prevalent view treats this as the inadvertent release of sensitive or private content, such as "confidential information embedded in its context or training data" ("Exploiting the Shadows: Unveiling Privacy Leaks through Lower-Ranked Tokens in Large Language Models") or "protected knowledge file data" ("When GPT Spills the Tea: Comprehensive Assessment of Knowledge File Leakage in GPTs"). In contrast, a more specific, technical definition frames it as "data contamination," where a model exhibits an artificially high log-likelihood on a text because that corpus was part of its pre-training data ("Mapping 1,000+ Language Models via the Log-Likelihood Vector"). A smaller line of work discusses the leakage of "benchmark-specific knowledge" to a student model through processes like distillation ("Data Laundering: Artificially Boosting Benchmark Results through Knowledge Distillation"). The construct is operationalized in multiple ways; some work detects it by comparing a model's log-likelihood with its benchmark performance, while other approaches use specific attack methods, such as exploiting "lower-ranked output tokens to leak sensitive information." The provided data also indicates that the `MMStar` benchmark is used as a measurement instrument for data leakage. This construct is explicitly related to `Memorization`, with one paper noting that "models do memorize some personal information and may occasionally disclose it." The scope of leakage is described as broad, with one study identifying five distinct "leakage vectors," including metadata, retrieval, and prompts ("When GPT Spills the Tea: Comprehensive Assessment of Knowledge File Leakage in GPTs").

## Sources

**[Data Laundering: Artificially Boosting Benchmark Results through Knowledge Distillation](https://aclanthology.org/2025.acl-long.407.pdf) (as "Knowledge leakage")**
> The phenomenon where benchmark-specific knowledge is transferred to a student model, often covertly through methods like distillation, even without direct training on the test set.

**[Mapping 1,000+ Language Models via the Log-Likelihood Vector](https://aclanthology.org/2025.acl-long.1584.pdf)**
> The phenomenon where a model exhibits an artificially high log-likelihood on a text corpus because that corpus was included in its pre-training data.

## Relationships

### Data leakage →
- **MMStar** (measurements) — *measured_by*
  > We evaluate 16 leading LVLMs on MMStar to assess their multi-modal capabilities, and on 7 benchmarks with the proposed metrics to investigate their data leakage and actual multi-modal gain. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
- **MMMU** (measurements) — *measured_by*
  > We evaluate 16 leading LVLMs on MMStar to assess their multi-modal capabilities, and on 7 benchmarks with the proposed metrics to investigate their data leakage and actual multi-modal gain. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > We evaluate 16 leading LVLMs on MMStar to assess their multi-modal capabilities, and on 7 benchmarks with the proposed metrics to investigate their data leakage and actual multi-modal gain. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)

### Associated with
- **Memorization** (constructs)
  > LLM and LVLM could still answer some visual-necessary questions without visual content, indicating the memorizing of these samples within large-scale training data. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
