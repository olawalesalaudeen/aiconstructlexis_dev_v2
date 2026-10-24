# MSVD
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the surveyed papers, MSVD is most commonly treated as a video understanding benchmark, including use for assessing short video comprehension. Some authors describe it more specifically as a video captioning dataset: one definition states that it contains 1,970 open-domain videos collected from a commercial video search engine, each paired with about 41 human-annotated captions. The descriptions therefore converge on a video benchmark framing, with a narrower captioning-oriented characterization in some work.

**What it is claimed to measure.** In the surveyed papers, it is linked to 1 construct and 2 behavioral indicators. The prevailing usage is as a measure of video understanding, with papers also using it to measure cross-modal retrieval and video question answering. Overall, the reported measurement claims are centered on video understanding but extend to multiple task-specific behaviors.

**Space of uses.** Papers often use MSVD alongside other benchmarks rather than on its own. In the available examples, it appears with MSR-VTT and TGIF in video understanding evaluation, with MUSIC-AVQA in open-ended VideoQA evaluation, and with MSR-VTT, LSMDC, and DiDeMo in cross-modal retrieval; another paper also reports experiments on MSVD together with MSR-VTT. This positions it as one benchmark within broader multi-benchmark evaluation setups.

## Sources

**[World Model on Million-Length Video And Language With Blockwise RingAttention](https://proceedings.iclr.cc/paper_files/paper/2025/file/71859ac75d53879d9bbd2f4b77b59929-Paper-Conference.pdf)**
> A video understanding benchmark used here to assess short video comprehension.

## Relationships

### → MSVD
- **Video understanding** (constructs) — *measured_by*
  > “To assess DART’s capabilities in video understanding, we integrate it with Video-LLaVA ... achieving a notable 4.0 score on MSVD”
  - [Stop Looking for ``Important Tokens'' in Multimodal Language Models: Duplication Matters More](https://aclanthology.org/2025.emnlp-main.505.pdf)
- **Video question answering** (behaviors tasks) — *measured_by*
  > "and two open-ended VideoQA datasets: MUSIC-AVQA (MUSC) (Li et al., 2022a) and MSVD (Chen & Dolan, 2011)"
  - [Sample then Identify: A General Framework for Risk Control and Assessment in Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1722a6bd1023c026a3d6a570fb3af75-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > We evaluate X-CoT on four benchmarks: MSR-VTT (Xu et al., 2016), MSVD (Chen and Dolan, 2011), LSMDC (Rohrbach et al., 2015), and DiDeMo (Anne Hendricks et al., 2017).
  - [X-CoT: Explainable Text-to-Video Retrieval via LLM-based Chain-of-Thought Reasoning](https://aclanthology.org/2025.emnlp-main.1588.pdf)
