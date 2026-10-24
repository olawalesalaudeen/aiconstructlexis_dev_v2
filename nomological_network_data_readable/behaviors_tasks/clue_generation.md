# Clue generation
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Most commonly, papers describe clue generation as producing a single word or short phrase to communicate a target value on a scale between opposite concepts, with the left and right concepts plus the target value provided and the goal of helping another competent language user recover that target (On the Same Wavelength? Evaluating Pragmatic Reasoning in Language Models across Broad Concepts). A smaller usage applies the same label to generating phrases or topics likely to appear in relevant documents, so that candidate documents can be retrieved for later evidence selection (RetroLLM: Empowering Large Language Models to Retrieve Fine-grained Evidence within Generation).

**Variants.** Across these uses, papers vary in both output form and setting: some frame it as a single clue in a pragmatic production task over broad conceptual scales, while another frames it as a set of clues, denoted Cgen, generated under corpus FM-Index constraints for document retrieval. The studied settings therefore range from human-directed communication of a target value to retrieval-oriented prediction of phrases or topics expected in relevant documents.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. For the pragmatic formulation, one paper says there is no ground truth for judging clue generation and treats human comprehension judgments as the gold standard; for the retrieval-oriented formulation, papers describe how clues are generated under constraints, but do not name a separate scoring instrument.

**What it is taken as evidence of.** No construct is linked to this behavior as something it indicates, so the papers do not record a shared construct that clue generation is taken to reflect.

## Sources

**[On the Same Wavelength? Evaluating Pragmatic Reasoning in Language Models across Broad Concepts](https://aclanthology.org/2025.emnlp-main.1008.pdf)**
> The task of generating a single word or short phrase to communicate a specific target value on a scale between two opposite concepts.
