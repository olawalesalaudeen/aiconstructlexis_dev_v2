# VisDial
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Papers most commonly describe VisDial as the Visual Dialog dataset, a multi-turn visual dialog resource for engaging in a conversation about an image. A smaller line of usage describes it as a conversational AI task of answering a series of questions about an image, and another paper frames it as a benchmark for chat-to-image acquisition in multi-turn chat scenarios.

**What it is claimed to measure.** Papers link VisDial to 1 construct and 1 behavioral indicator. The reported measurement claims center on multimodal understanding and visual question answering, rather than a wider spread of targets.

**Space of uses.** No paper links it directly to other measurement instruments. Papers use it as one task within evaluations that also include COCO, VQAv2, OKVQA, GQA, and VizWiz, one paper includes it in an ablation study across five datasets, and another positions it as a benchmark for chat-to-image acquisition in multi-turn conversational settings.

## Sources

**[Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)**
> The Visual Dialog dataset, which evaluates a model's ability to engage in a multi-turn conversation about an image.

## Relationships

### → VisDial
- **Visual question answering** (behaviors tasks) — *measured_by*
  > In order to assess multimodal vision and language capabilities of DEEM , we conduct evaluation against current SOTA LMMs ... across several tasks, including ... visual question answering on ... VisDial (Das et al., 2017) (Section 3.2).
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > In order to assess multimodal vision and language capabilities of DEEM , we conduct evaluation against current SOTA LMMs ... across several tasks, including ... VisDial (Das et al., 2017)
  - [DEEM: Diffusion models serve as the eyes of large language models for image perception](https://proceedings.iclr.cc/paper_files/paper/2025/file/a8399aace3dfa6dfb8b635117748c561-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > In cross-modal retrieval, we use the Visual Dialog (Das et al., 2017) dataset for the comparability to previous work (Koh et al., 2023).
  - [Bridging Vision and Language Spaces with Assignment Prediction](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f20f2b0315c72201e23512fdbd1ee91-Paper-Conference.pdf)
