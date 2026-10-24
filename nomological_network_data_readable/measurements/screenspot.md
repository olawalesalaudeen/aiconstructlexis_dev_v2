# ScreenSpot
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across papers, the prevailing description is a benchmark for single-step or cross-platform GUI grounding. Definitions describe it as assessing whether a predicted location falls within the ground truth element bounding box, and one paper further presents it as a GUI visual grounding benchmark containing 1,200 instructions with target element bounding boxes across mobile, desktop, and web or website environments. A smaller variation in wording frames it more broadly as part of multi-modal task performance evaluation, though the recurring content is GUI grounding across platforms.

**What it is claimed to measure.** Papers use ScreenSpot to measure 3 constructs and 1 behavioral indicator. The dominant claims are that it measures Action grounding and Visual grounding, with papers also using it to measure Grounding and, in a smaller line of work, Adaptability. Across these links, the named targets are mostly grounding-related.

**Space of uses.** No measurement instrument is explicitly linked to it, but several papers use it within broader benchmark suites. It appears alongside VisualWebBench and RefExp for GUI grounding, and alongside MiniWob, AITW, and Mind2Web in broader evaluations. Papers also position it as a check of fundamental, single-step, or cross-platform GUI grounding capabilities, commonly using grounding accuracy where a prediction is correct if the predicted location falls inside the target element's bounding box.

## Sources

**[OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)**
> A benchmark that assesses single-step GUI grounding capabilities across multiple platforms by evaluating whether predicted locations fall within ground truth element bounding boxes.

## Relationships

### → ScreenSpot
- **Action grounding** (behaviors tasks) — *measured_by*
  > We also include Bbox-version of element and action grounding subtasks in VisualWebBench (Liu et al., 2024c), ScreenSpot (Cheng et al., 2024), RefExp (Wichers et al., 2018) for GUI grounding.
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **Visual grounding** (constructs) — *measured_by*
  > First, ScreenSpot (Cheng et al., 2024) provides a GUI visual grounding benchmark containing 1,200 instructions with target element bounding boxes across mobile, desktop, and web environments. (Section 3.1)
  - [AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://proceedings.iclr.cc/paper_files/paper/2025/file/c681fb2bf1d785fbc766f3ea14758aab-Paper-Conference.pdf)
- **Adaptability** (constructs) — *measured_by*
  > Our approach demonstrates superior performance in task accuracy and adaptability, as validated by benchmarks such as ScreenSpot, MiniWob, AITW, and Mind2Web.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
- **Grounding** (constructs) — *measured_by*
  > We first evaluated AGUVIS’s fundamental GUI grounding capabilities using ScreenSpot (Cheng et al., 2024), a benchmark that spans mobile, desktop, and website platforms. (Section 3.1)
  - [Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ae/xu25ae.pdf)
