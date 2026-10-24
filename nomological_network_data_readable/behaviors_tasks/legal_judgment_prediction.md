# Legal judgment prediction
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Charge disambiguation, Legal cause prediction, Legal article prediction, Legal penalty prediction  

## State of the Field

**Space of definitions.** Across the papers, the label is used both broadly and through narrower legal prediction subtasks. One definition frames it as forecasting court rulings from case information, including whether a plaintiff's claims are supported, while another frames the same family of behavior as inferring possible cause types, applicable legal articles, or likely penalties from a case description, with cause prediction also using relevant background information. In these formulations, the target is a case-linked legal outcome drawn from the provided materials.

**Variants.** Named variants include cause prediction, article prediction, penalty prediction, and charge disambiguation. Cause prediction asks models to infer possible cause types, article prediction to infer possible legal articles, and penalty prediction to make a reasonable prediction about penalties from a case description. Charge disambiguation is presented as identifying the correct charge among similar criminal charges by analyzing differences in their four-element structures.

**Space of elicitation and scores.** No measurement instrument is linked to it.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not specify a named construct that performance on this behavior is taken to indicate.

## Sources

**[Legal Fact Prediction: The Missing Piece in Legal Judgment Prediction](https://aclanthology.org/2025.emnlp-main.322.pdf)**
> The task of forecasting court rulings, such as whether a plaintiff's claims are supported, based on case information.

**[JUREX-4E: Juridical Expert-Annotated Four-Element Knowledge Base for Legal Reasoning](https://aclanthology.org/2025.emnlp-main.188.pdf) (as "Charge disambiguation")**
> Distinguishing between similar criminal charges by analyzing differences in their four-element structures.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal cause prediction")**
> Inferring the likely legal cause or case type based on a given case description and background information.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal article prediction")**
> Inferring the relevant legal articles that apply to a given case description.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal penalty prediction")**
> Predicting the likely penalties a defendant may face based on a case description.
