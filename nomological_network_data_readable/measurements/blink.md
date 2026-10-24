# BLINK
**Type:** Measurement  
**Referenced in:** 14 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing description is of BLINK as a multi-image benchmark, or benchmark suite, for visual perception and reasoning, especially multi-view and spatial relationships. Several papers also describe it as a collection of 14 visual perception tasks that humans can quickly solve, covering indoor, outdoor, and natural scenes; some tasks involve multiple images, including visual similarity and multi-view reasoning, and papers mention Jigsaw and Multi-view reasoning splits. A smaller line of work frames it more generally as a benchmark meant to test whether multimodal language models can perceive as well as see.

**What it is claimed to measure.** Papers link BLINK to five constructs and one behavioral indicator. The most common claim is that it measures multi-image reasoning, with papers using it in multi-image understanding, multi-image tasks, and multi-image analysis settings; smaller strands also use it to measure spatial reasoning, visual perception, and visual reasoning. One survey further reports it as measuring hallucination, and a separate paper treats it as related to long-context understanding rather than as a direct measure, so the reported measurement use is centered on multi-image reasoning but spread across several constructs.

**Space of uses.** Papers commonly use BLINK alongside other multi-image or perception-focused evaluations, most often MMMU and Mantis, and also with QBench or QBench2, MMDU, and NLVR2. It is usually positioned as one benchmark within a broader evaluation suite, such as lists of multi-image understanding or perception-focused benchmarks. It is directly linked to one other instrument, MM-NIAH, which uses images from BLINK's Jigsaw and Multi-view reasoning split as image needles.

**Concerns raised.** A concern appears in long-context evaluation work: BLINK is described as a short-context multi-image comprehension benchmark, and such benchmarks are said to "fail to evaluate the capability for long-context document comprehension."

## Sources

**[MIA-DPO: Multi-Image Augmented Direct Preference Optimization For Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/557a20663907ed637c2807f608d5bec2-Paper-Conference.pdf)**
> A multi-image benchmark used to evaluate reasoning over multi-view and spatial relationships.

## Relationships

### → BLINK
- **Multi-image reasoning** (constructs) — *measured_by*
  > “Table 4 presents the the evaluation results on multi-image understanding benchmarks. The evaluation benchmarks consist of ... BLINK ...”
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > The perception-focused benchmarks include RealWorldQA, CV-Bench and BLINK (Section 4)
  - [LATTE: Learning to Think with Vision Specialists](https://aclanthology.org/2025.emnlp-main.564.pdf)
- **Spatial reasoning** (constructs) — *measured_by*
  > GPT-4o with SKETCHPAD sets a new state of the art on all tasks, including... BLINK spatial reasoning (83.9%)
  - [Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > Some efforts include POPE (Li et al., 2023g), LLaVA-RLHF (Sun et al., 2023), BLINK (Fu et al., 2024), and Rohrbach et al. (2018); Biten et al. (2022) are the few examples that consider multimodal hallucination. (Section 5.1)
  - [Towards Rationality in Language and Multimodal Agents: A Survey](https://aclanthology.org/2025.naacl-long.186.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > existing benchmarks for multi-image comprehensions, such as SEED-Bench-2 [25] and BLINK [26], consist of short contexts, which fail to evaluate the capability for long-context document comprehension. (Introduction)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MM-NIAH** (measurements)
  > for each evaluation data, images sampled from the Jigsaw and Multi-view reasoning split of BLINK benchmark [26] are inserted into the document to serve as the image needle. (Section 3.2)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
