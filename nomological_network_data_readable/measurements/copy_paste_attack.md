# Copy-paste attack
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Copy-Paste Attack, Text mixing  

## State of the Field

**What it is.** Across the surveyed work, the dominant framing is a watermark-robustness test built around mixing texts. Most definitions describe inserting a watermarked or machine-generated span into a larger human-written or hand-written document, while one definition instead describes inserting copied original text before generated text. Reported setups vary, including embedding watermarked fragments in a surrounding un-watermarked document, inserting 600 tokens from the origin text before generated text, or inserting a 200-token watermarked span into a 1000-token human-written passage.

**What it is claimed to measure.** Papers use it to measure Robustness, the only linked construct, and no behavioral indicators are linked to it. One paper explicitly assesses the robustness of different watermarking methods under various attacks, including the copy-paste attack, so the available claims converge on robustness rather than spreading across multiple targets.

**Space of uses.** Papers use it as a scenario-based attack within broader watermark evaluations, and some describe the same setup as text mixing or a Copy-Paste scenario where watermarked text appears inside a larger hand-written passage. One paper places it alongside paraphrasing using GPT-3.5 and two configurations of the DIPPER attack when assessing robustness, and no other measurement instruments are linked to it.

**Concerns raised.** A recurring concern in these descriptions is that watermarks can be difficult to detect when hidden in human-written text. Related snippets describe this setting as watermarked text mixed into a longer hand-written or human-written document.

## Sources

**[A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)**
> An attack procedure that inserts copied original text into generated text to test watermark robustness.

**[Towards Codable Watermarking for Injecting Multi-Bits Information to LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/abdc8c031aa6c6917c3b593166e5e340-Paper-Conference.pdf) (as "Copy-Paste Attack")**
> An evaluation procedure to test watermark robustness where a segment of watermarked text is inserted into a larger body of human-written text.

**[On the Reliability of Watermarks for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d78e9e4316e1714fbb0f20be66f8044c-Paper-Conference.pdf) (as "Text mixing")**
> The observable behavior of embedding spans of machine-generated text within a larger, human-written document, also referred to as a 'Copy-Paste' scenario.

## Relationships

### → Copy-paste attack
- **Watermark robustness** (constructs) — *measured_by*
  > Tests involved watermark detection accuracy under no attack, GPT3.5 rewrite attacks, two DIPPER (Krishna et al., 2023) settings, the copy-paste attack as well as the emoj attack (Appendix G). (Table 1)
  - [A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > We assess the robustness of different watermarking methods under various attacks, including the copy-paste attack (Kirchenbauer et al., 2023a), paraphrasing using GPT-3.5, and two configurations of the DIPPER attack (Krishna et al., 2024). (Section 4.4)
  - [Watermarking Large Language Models: An Unbiased and Low-risk Method](https://aclanthology.org/2025.acl-long.391.pdf)
