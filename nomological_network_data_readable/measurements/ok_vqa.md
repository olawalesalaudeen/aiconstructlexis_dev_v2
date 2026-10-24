# OK-VQA
**Type:** Measurement  
**Referenced in:** 45 papers  
**Also known as:** OKVQA  

## State of the Field

**What it is.** Across papers, the prevailing usage treats OK-VQA, sometimes written OKVQA, as a benchmark or dataset for open-ended visual question answering. Definitions consistently say its questions require external or outside knowledge beyond what is directly visible in the image, with some papers framing this more specifically as commonsense, world, or general knowledge, and one paper describing it as requiring outside knowledge and reasoning. A smaller line of usage refers specifically to the validation split, and one paper says CVQA adopts OK-VQA's categorization with modifications.

**What it is claimed to measure.** Papers most commonly use OK-VQA to measure visual question answering, the only linked behavioral indicator. It is also linked to 6 constructs, with the most frequent construct framings being multimodal understanding, world knowledge, commonsense reasoning, and generalization, plus 2 additional construct links. Overall, the construct links cover several claims rather than a single recorded construct, and one paper separately relates OK-VQA to world knowledge by stating that its questions require world knowledge.

**Space of uses.** Papers usually position OK-VQA as one part of broader multimodal evaluation suites. It is commonly reported alongside VQAv2, VizWiz, TextVQA, GQA, and A-OKVQA, and papers use it in zero-shot or few-shot evaluation, downstream generalization tests, and evaluations aimed at knowledge-based or long-context settings. No papers directly link it to another measurement instrument.

## Sources

**[DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)**
> Open-ended Knowledge-based Visual Question Answering, a benchmark used to assess multimodal question answering requiring external knowledge.

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf) (as "OKVQA")**
> The Outside Knowledge Visual Question Answering (OK-VQA) dataset, which requires external knowledge to answer questions about images.

## Relationships

### → OK-VQA
- **Visual question answering** (behaviors tasks) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on ... Visual Question Answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019), GQA (Hudson & Manning, 2019), VizWiz (Gurari et al., 2018)). (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > “We evaluate Emu on a broad range of vision-language tasks including image question answering (VQAv2 (Goyal et al., 2017), OKVQA (Marino et al., 2019)”
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > OKVQA (Marino et al., 2019) for external knowledge
  - [What matters when building vision-language models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. We report answer accuracy on the OK-VQA [28], TextVQA [29], VizWiz [30], and VQAV2 [31]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > we assess the learned generalization ability on OKVQA (Marino et al., 2019), TextVQA (Singh et al., 2019), GQA (Hudson & Manning, 2019), and OCRVQA (Mishra et al., 2019) (Section 4.1).
  - [Learn from Downstream and Be Yourself in Multimodal Large Language Models Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25q/huang25q.pdf)
- **Knowledge reasoning** (constructs) — *measured_by*
  > OKVQA (Marino et al., 2019), Visual Common Sense Reasoning (VCR) (Zellers et al., 2019) and A-OKVQA (Schwenk et al., 2022) evaluate whether models are able to integrate outside knowledge in order to answer questions, covering a broad base of common-sense and world knowledge. (Section 2.1)
  - [Century: A Framework and Dataset for Evaluating Historical Contextualisation of Sensitive Images](https://proceedings.iclr.cc/paper_files/paper/2025/file/efc549c2d22edf2f244b7013387c6251-Paper-Conference.pdf)
