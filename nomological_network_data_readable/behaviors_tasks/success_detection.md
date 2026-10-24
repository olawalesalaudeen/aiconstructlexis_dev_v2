# Success detection
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Success classification  

## State of the Field

**Space of definitions.** Across the papers, it is consistently used for a judgment about whether a task has been completed successfully. One formulation treats it as determining task or sub-task success from environmental feedback, summarized as "Determine if the task is successful" and as something that "determines sub-task success based on environmental feedback" (MLLM as Retriever: Interactively Learning Multimodal Retrieval for Embodied Agents). Another formulation narrows it to a binary success-versus-mistake decision for a procedural task, made from procedural text plus visual evidence gathered through dialog.

**Variants.** Papers use both success detection and success classification for closely related versions of the behavior. The main variation is in scope and evidence source: some descriptions target whole-task or sub-task success from environmental feedback, while another studies procedural execution and asks after each iteration whether the procedure was successfully executed from "the video frame and entire dialog history" (Transparent and Coherent Procedural Mistake Detection).

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. In the defining papers, it is operationalized as a direct success judgment, either from environmental feedback or as a binary success-or-mistake classification after dialog over procedural evidence.

**What it is taken as evidence of.** No construct is linked to this behavior.

## Sources

**[MLLM as Retriever: Interactively Learning Multimodal Retrieval for Embodied Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e447acb68f57e29234bc0eb19896f11-Paper-Conference.pdf)**
> The determination of whether a task or sub-task has been successfully completed based on environmental feedback.

**[Transparent and Coherent Procedural Mistake Detection](https://aclanthology.org/2025.emnlp-main.706.pdf) (as "Success classification")**
> The observable behavior of making a binary decision (success or mistake) about whether a procedural task has been completed, based on a procedural text and visual evidence gathered through dialog.
