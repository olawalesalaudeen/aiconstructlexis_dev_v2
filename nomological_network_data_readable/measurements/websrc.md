# WebSRC
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing description treats WebSRC as webpage-centered question-answer data used in vision-language or web comprehension settings. Definitions differ in emphasis: some describe it as a dataset for vision-language tasks or for web-based structural reading comprehension, while another paper calls it "a static HTML comprehension benchmark" where answers are extracted from web pages based on a given question.

**What it is claimed to measure.** Papers link WebSRC to two constructs, GUI understanding and HTML understanding, and no behavioral indicators. The explicit measurement claims cover both constructs: one paper lists WebSRC among benchmarks selected "for GUI understanding," while another says it tests WebAgent on WebSRC as "a static HTML comprehension benchmark" for HTML understanding.

**Space of uses.** No measurement instrument is directly linked to WebSRC, though one GUI understanding evaluation uses it alongside VisualWebBench, ScreenQA-Short, and WidgetCap. Papers position it in several ways: as a benchmark that a web agent is tested on, as one of the vision-language tasks in a main results table "illustrating the multi-modal in-context learning ability" of a model, and as data incorporated into a webpage-understanding training regime.

**Concerns raised.** One paper reports refining the WebSRC question-answer data "to improve its quality" with GPT-4 before using it in training.

## Sources

**[A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)**
> A dataset used for vision-language tasks, evaluated in this paper to test multi-modal in-context learning ability.

## Relationships

### → WebSRC
- **HTML understanding** (constructs) — *measured_by*
  > In Appendix F, we also test WebAgent on WebSRC (Chen et al., 2021b), a static HTML comprehension benchmark (Section 4).
  - [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)
- **GUI understanding** (constructs) — *measured_by*
  > We select VisualWebBench (Liu et al., 2024c), WebSRC (Chen et al., 2021), ScreenQA-Short (Hsiao et al., 2022), WidgetCap (Li et al., 2020) for GUI understanding.
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
