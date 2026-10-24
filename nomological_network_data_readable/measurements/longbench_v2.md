# LongBench v2
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description is a multiple-choice benchmark for long contexts, with contexts ranging from 8K to 2M words. One fuller account specifies 503 multiple-choice questions spanning six tasks, single-document QA, multi-document QA, long in-context learning, long dialogue history understanding, code repository understanding, and long structured data understanding, and presents it as designed to evaluate deep long-context comprehension and reasoning, while a shorter description emphasizes its use for assessing long-context performance and efficiency.

**What it is claimed to measure.** Across the papers, it is linked to one construct and two behavioral indicators. The only linked construct is long-context reasoning, and the linked behavioral indicators are document question answering and text summarization; one paper describes it as a benchmark for challenging long-context question-answering, another uses it for long-context reasoning, and another groups it with datasets that primarily assess retrieval and summarization rather than complex reasoning.

**Space of uses.** No other measurement instrument is linked to it. In use, papers position it as a long-context evaluation benchmark: one study reports accuracy and throughput on LongBench v2 (Long) across different retrieval context lengths, and the same study applies middle truncation to keep the context within 128K tokens; another describes the benchmark as broad in scope and difficult.

**Concerns raised.** One paper argues that LongBench v2, together with other long-context evaluation datasets, primarily assesses retrieval and summarization rather than complex reasoning.

## Sources

**[RAPID: Long-Context Inference with Retrieval-Augmented Speculative Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25s/chen25s.pdf)**
> A benchmark of multi-choice tasks across long context lengths, used here to assess long-context performance and efficiency.

## Relationships

### → LongBench v2
- **Retrieval-augmented generation** (behaviors tasks) — *measured_by*
  > We utilize LongBench v2 (Bai et al., 2024), a benchmark designed for challenging long-context question-answering (in Appendix A.5).
  - [Graph World Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25p/feng25p.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > “We utilize LongBench v2 (Bai et al., 2024), a benchmark designed for challenging long-context question-answering”
  - [Graph World Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25p/feng25p.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > A significant portion of long-context evaluation datasets, including RULER (Hsieh et al., 2024b), LongBench (Bai et al., 2024), LongBench v2 (Bai et al., 2025), and LOFT (Lee et al., 2024), primarily assess retrieval and summarization rather than complex reasoning. (Section 2)
  - [GSM-$∞$: How Do your LLMs Behave over Infinitely Increasing Reasoning Complexity and Context Length?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25m/zhou25m.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > For long-context reasoning on LongBench v2 (R2 = 70.26%), d_ffn overwhelmingly dominates, indicating that wider FFNs are essential for handling extended contexts effectively.
  - [From Parameters to Performance: A Data-Driven Study on LLM Structure and Development](https://aclanthology.org/2025.emnlp-main.1325.pdf)
