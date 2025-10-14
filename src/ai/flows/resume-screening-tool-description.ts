'use server';
/**
 * @fileOverview Generates a description of the AI-powered resume screening tool.
 *
 * - getResumeScreeningToolDescription - A function that returns the description of the tool.
 * - ResumeScreeningToolDescriptionInput - The input type for the getResumeScreeningToolDescription function.
 * - ResumeScreeningToolDescriptionOutput - The return type for the getResumeScreeningToolDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeScreeningToolDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project, e.g., AI-Powered Resume Screening & Job Match System'),
});
export type ResumeScreeningToolDescriptionInput = z.infer<typeof ResumeScreeningToolDescriptionInputSchema>;

const ResumeScreeningToolDescriptionOutputSchema = z.object({
  description: z.string().describe('A detailed description of the AI-powered resume screening tool, including its functionality and benefits.'),
});
export type ResumeScreeningToolDescriptionOutput = z.infer<typeof ResumeScreeningToolDescriptionOutputSchema>;

export async function getResumeScreeningToolDescription(input: ResumeScreeningToolDescriptionInput): Promise<ResumeScreeningToolDescriptionOutput> {
  return resumeScreeningToolDescriptionFlow(input);
}

const resumeScreeningToolDescriptionPrompt = ai.definePrompt({
  name: 'resumeScreeningToolDescriptionPrompt',
  input: {schema: ResumeScreeningToolDescriptionInputSchema},
  output: {schema: ResumeScreeningToolDescriptionOutputSchema},
  prompt: `Describe the functionality and benefits of the following AI-powered resume screening and job match system:

Project Name: {{{projectName}}}

Focus on its impact and value in streamlining the resume screening process and improving job matching accuracy. Highlight the use of NLP and machine learning techniques.`, 
});

const resumeScreeningToolDescriptionFlow = ai.defineFlow(
  {
    name: 'resumeScreeningToolDescriptionFlow',
    inputSchema: ResumeScreeningToolDescriptionInputSchema,
    outputSchema: ResumeScreeningToolDescriptionOutputSchema,
  },
  async input => {
    const {output} = await resumeScreeningToolDescriptionPrompt(input);
    return output!;
  }
);
