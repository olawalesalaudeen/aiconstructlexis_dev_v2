# Modality gap
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the surveyed work, the prevailing framing treats modality gap as a discrepancy between source and target modalities, especially a difference in data distributions and, in some wording, underlying model architectures. In Release the Powers of Prompt Tuning: Cross-Modality Prompt Transfer, it is described as one of the gaps a source prompt must overcome across modalities and is interpreted as a distribution difference that comes from different data types. A narrower formulation appears in Understanding the Modality Gap: An Empirical Study on the Speech-Text Alignment Mechanism of Large Speech Language Models, where the term is used for a latent trait reflecting the performance disparity between speech and text inputs within the same model, arising from suboptimal alignment between modalities.

**Space of facets.** Systematization is limited, but the papers do separate a few uses. One paper places modality gap alongside a distinct task gap in cross-modality prompt transfer, while another instantiates the same label as GAP = Mt - Ms, the overall benchmark-score difference between text and speech inputs. Across these uses, the term is applied both to an underlying cross-modal discrepancy and to its observed performance manifestation.

**Space of measurement.** Only one measurement instrument is linked to it, and no behavioral indicator is linked. The linked instrument is VoiceBench, a benchmark that one paper uses to quantify the construct as the drop in benchmark scores between text and speech inputs, using the AdvBench, IFEval, OBQA, MMSU, and sd-qa subsets. This operationalization directly matches the GAP = Mt - Ms formulation and measures the construct through score differences rather than through direct measures of distribution or architecture differences.

**Links.** The construct is linked to two other constructs, both through recorded causal claims. One paper claims a causal relationship from multimodal alignment to modality gap, reporting that increased cross-modal alignment can reduce the modality gap. Another paper claims a causal relationship from modality gap to compositionality, describing modality gap as one of the primary factors contributing to poor compositionality. No correlational or generic related links are reported.

## Sources

**[Release the Powers of Prompt Tuning: Cross-Modality Prompt Transfer](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ae9589ff1a691d09ef0528e4e309b2f-Paper-Conference.pdf)**
> The discrepancy between a source and target modality arising from differences in their data distributions and underlying model architectures.

## Relationships

### Modality gap →
- **VoiceBench** (measurements) — *measured_by*
  > We quantify the modality gap as the drop in benchmark scores between text and speech inputs... For evaluation, we adopt five subsets of the VoiceBench dataset (Chen et al., 2024)—AdvBench, IFEval, OBQA, MMSU, and sd-qa (Sections 4.3 & 3.2)
  - [Understanding the Modality Gap: An Empirical Study on the Speech-Text Alignment Mechanism of Large Speech Language Models](https://aclanthology.org/2025.emnlp-main.262.pdf)
- **Compositionality** (constructs) — *causes*
  > The modality gap (Liang et al., 2022) is one of the primary factors contributing to the poor compositionality of contrastive vision-language models... (Section 6.1)
  - [Vision-Free Retrieval: Rethinking Multimodal Search with Textual Scene Descriptions](https://aclanthology.org/2025.emnlp-main.709.pdf)

### → Modality gap
- **Multimodal alignment** (constructs) — *causes*
  > AlignCLIP increases the cross-modal alignment, and thereby reduce the modality gap.
  - [Mitigate the Gap: Improving Cross-Modal Alignment in CLIP](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc1de06a58ba1db43538a37e076e466d-Paper-Conference.pdf)
