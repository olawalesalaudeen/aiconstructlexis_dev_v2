# Instruction generation
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the cited definitions, the prevailing usage is a reverse generation task: producing an instruction or prompt from a response, so as to infer what user prompt would naturally elicit that response. Papers describe this both as a model p(I|R) that generates instructions given responses and as predicting a prompt that would be correctly answered by a given piece of human-written text or part of a document. The formulations align on response-to-instruction generation, with variation mainly in whether the conditioning input is described as a response, a human-written text, or a document segment.

**Variants.** The variants all stay within the same reverse-generation pattern. Some papers describe generating an instruction from seed responses or producing a corresponding synthetic instruction, while another frames it as generating instructions for unlabelled data by predicting a prompt for a portion of a web document and using that as an instruction-following example. Papers also place it alongside response generation as a separate step in a larger synthesis process.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the task descriptions, papers elicit it directly by running a reverse model to generate an instruction from a response or by predicting a prompt for unlabelled text, and they do not name a separate scoring instrument.

**What it is taken as evidence of.** Papers do not converge on treating instruction generation as evidence of a single construct. The linked constructs are Evaluator self-consistency and Memorization, but they are used differently: one paper claims a causal relationship from Evaluator self-consistency to Instruction generation, while another reports that Instruction generation is related to Memorization, phrased as an implicit memorization of instruction distributions. The recorded links therefore present it as caused by or related to constructs, rather than explicitly as a direct indicator of one.

## Sources

**[MAIN: Mutual Alignment Is Necessary for instruction tuning](https://aclanthology.org/2025.emnlp-main.644.pdf)**
> Producing an instruction given a response, typically to infer what user prompt would naturally elicit that response.
